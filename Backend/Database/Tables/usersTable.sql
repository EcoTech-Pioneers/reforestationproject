CREATE TABLE Users (
    UserID VARCHAR(100),
    Username NVARCHAR(50) NOT NULL,
    UserFirstName VARCHAR(50) NOT NULL,
    UserMiddleName VARCHAR(50),
    UserLastName VARCHAR(50)NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    PasswordHash NVARCHAR(100) NOT NULL,
    UserProfilePic VARCHAR(200) ,
    UserBio VARCHAR(500),
);

