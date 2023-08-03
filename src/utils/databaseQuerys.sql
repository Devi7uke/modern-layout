CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_username VARCHAR(50) UNIQUE NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_fullname VARCHAR(200),
    user_email VARCHAR(300) NOT NULL,
    user_level VARCHAR(50) NOT NULL
);

INSERT INTO users 
(user_username, user_password, user_fullname, user_email, user_level) 
VALUES 
('172929', '654321', 'Jose Guadalupe Yañez Hernandez', '172929@upslp.edu.mx', 'student'),
('172817', '123456', 'Brayan Javier Frias Saandoval', '172817@upslp.edu.mx', 'admin');

CREATE TABLE careers (
    career_alias VARCHAR(30) PRIMARY KEY,
    career_name VARCHAR(100)
)

INSERT INTO careers (career_alias, career_name) VALUES
('ISTI', 'Ingeniería en Sistemas y Tecnologías Industriales'),
('ITI', 'Ingeniería en Tecnologías de la Información'),
('ITEM', 'Ingeniería en Telemática'),
('ITMA', 'Ingeniería en Tecnologías de Manufactura'),
('LMI', 'Licenciatura en Mercadotecnia Internacional'),
('LAG', 'Licenciatura en Administración y Gestión');


CREATE TABLE user_career_privileges (
    user_privilege_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    career_id VARCHAR(30) REFERENCES careers(career_alias),
    read_permission BOOL DEFAULT false,
    write_permission BOOL DEFAULT false,
    execute_permission BOOL DEFAULT false,
    CONSTRAINT unique_user_career_relation UNIQUE (user_id, career_id)
);

INSERT INTO user_career_privileges 
(user_id, career_id, read_permission, write_permission, execute_permission) 
VALUES
(4, 'ITI', true, true, true),
(4, 'ISTI', true, true, true),
(4, 'ITEM', true, true, true),
(4, 'ITMA', true, true, true),
(4, 'LAG', true, true, true),
(4, 'LMI', true, true, true);

SELECT * FROM users as a INNER JOIN user_career_privileges as b ON a.user_id = b.user_id;

SELECT
a.user_id, a.user_username, a.user_fullname, a.user_email, a.user_level,
b.user_privilege_id, b.career_id, b.read_permission, b.write_permission, b.execute_permission
FROM users AS a
INNER JOIN user_career_privileges AS b ON a.user_id = b.user_id;

/*--------------------Questions--------------------*/
CREATE TABLE questions (
	question_id SERIAL PRIMARY KEY,
    section_id INTEGER REFERENCES sections(section_id),
	question_alias VARCHAR(50) NOT NULL,
	question_text VARCHAR(200) NOT NULL,
	question_type VARCHAR(50) NOT NULL,
	question_placeholder VARCHAR(200) DEFAULT NULL,
	question_requiered BOOL DEFAULT false,
	question_binding BOOL DEFAULT true
);

CREATE TABLE sections (
	section_id SERIAL PRIMARY KEY,
	section_name VARCHAR(200),
	section_description VARCHAR(1000) DEFAULT NULL
);

INSERT INTO sections 
(section_name)
VALUES
('Datos generales'),
('Titulación'),
('Estudios posteriores al egreso'),
('Antecedentes laborales'),
('Situación laboral actual'),
('Movilidad laboral (nacional e internacional)'),
('Trayectoria profesional y planes de estudio'),
('Preparación académica recibida');

CREATE TABLE options (
    option_id SERIAL PRIMARY KEY,
    question_id INTEGER REFERENCES questions(question_id),
    option_text VARCHAR(100),
    option_weighting INTEGER DEFAULT NULL
);


/*This code was dropped due to some data consistency issues.*/

--CODE NEDDED TO MANAGE THE USER PRIVILEGES AND ACCESS LEVEL

CREATE TABLE user_privileges (
    user_privilege_id SERIAL PRIMARY KEY,
    user_id INTEGER UNIQUE REFERENCES users(user_id),
    data_read_only BOOL
);

CREATE TABLE careers (
    career_id SERIAL PRIMARY KEY,
    career_alias VARCHAR(30),
    career_name VARCHAR(100)
);


INSERT INTO careers (career_alias, career_name) VALUES
('ISTI', 'Ingeniería en Sistemas y Tecnologías Industriales'),
('ITI', 'Ingeniería en Tecnologías de la Información'),
('ITEM', 'Ingeniería en Telemática'),
('ITMA', 'Ingeniería en Tecnologías de Manufactura'),
('LMI', 'Licenciatura en Mercadotecnia Internacional'),
('LAG', 'Licenciatura en Administración y Gestión');

--CREATE NEW COLUMN ON INSERTION OF A NEW CAREER IN ORDER TO REPRESENT THE NEW CAREER

CREATE OR REPLACE FUNCTION add_career_to_user_privileges_on_new_career()
RETURNS TRIGGER LANGUAGE 'plpgsql'
AS $BODY$
DECLARE
	career_alias VARCHAR(50);
	column_name_to_add VARCHAR(50);
BEGIN
	career_alias := NEW.career_alias;
	IF career_alias IS NOT NULL THEN
		column_name_to_add := career_alias || '_data';
		IF NOT EXISTS (
			SELECT column_name FROM information_schema.columns WHERE table_name = 'user_privileges' AND column_name = career_alias
		) THEN EXECUTE 'ALTER TABLE user_privileges ADD COLUMN ' || quote_ident(column_name_to_add) || 'BOOL';
		END IF;
	END IF;
	RETURN NEW;
END;$BODY$;

CREATE TRIGGER update_career_data_cols 
AFTER INSERT ON public.careers 
FOR EACH ROW EXECUTE FUNCTION add_career_to_user_privileges_on_new_career();

--DROP COLUMN RELATED TO THE CAREER ON DELETION OF THE CAREER REGISTER

CREATE OR REPLACE FUNCTION drop_career_column_on_career_delete()
RETURNS TRIGGER LANGUAGE 'plpgsql'
AS $BODY$
DECLARE
    career_alias VARCHAR(50);
    column_name_to_drop VARCHAR(50);
BEGIN
    career_alias := OLD.career_alias;
    IF career_alias IS NOT NULL THEN
        column_name_to_drop := career_alias || '_data';
        IF EXISTS (
            SELECT column_name
            FROM information_schema.columns WHERE table_name = 'user_privileges' AND column_name = column_name_to_drop
        ) THEN EXECUTE 'ALTER TABLE user_privileges DROP COLUMN ' || quote_ident(column_name_to_drop);
        END IF;
    END IF;
    RETURN OLD;
END;$BODY$;

CREATE TRIGGER delete_career_data_cols
AFTER DELETE ON public.careers
FOR EACH ROW EXECUTE FUNCTION drop_career_column_on_career_delete();