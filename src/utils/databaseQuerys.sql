CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_username VARCHAR(50) UNIQUE NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_fullname VARCHAR(200),
    user_email VARCHAR(300) NOT NULL,
    user_level VARCHAR(50) NOT NULL
)

INSERT INTO users 
(user_username, user_password, user_fullname, user_email, user_level) 
VALUES 
('172929', '654321', 'Jose Guadalupe Yañez Hernandez', '172929@upslp.edu.mx', 'student'),
('172817', '123456', 'Brayan Javier Frias Saandoval', '172817@upslp.edu.mx', 'admin')