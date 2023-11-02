CREATE OR ALTER PROCEDURE registerUserProc (@UserID VARCHAR(100),@UserName VARCHAR(50),@UserPhone INT,@UserFirstName VARCHAR(50),@UserMiddleName VARCHAR(50),@UserLastName VARCHAR(50),@Email VARCHAR(100),@PasswordHash VARCHAR(MAX),@UserBio VARCHAR(200),@UserProfilePic VARCHAR(MAX))
AS 
BEGIN
INSERT INTO Users(UserID,UserName,UserPhone,UserFirstName,UserMiddleName,UserLastName,Email,UserBio,UserProfilePic,PasswordHash)
VALUES (@UserID,@UserName,UserPhone,@UserFirstName,@UserMiddleName,@UserLastName,@Email,@UserBio,@UserProfilePic,@PasswordHash)
END; 
