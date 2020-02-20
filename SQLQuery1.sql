CREATE DATABASE HR

USE HR

CREATE TABLE Students 
(
	Id INT PRIMARY KEY IDENTITY(1, 1),
	[Name] NVARCHAR(50),
	[Description] NVARCHAR(50),
	IsEnrolled BIT,
	Grades DECIMAL(5, 4)
)

INSERT INTO Students VALUES ('Pam', 'Developer', 1, 1.40)
INSERT INTO Students VALUES ('Ram', 'Programmer', 0, 1.75)
INSERT INTO Students VALUES ('Lam', 'DB Admin', 0, 2.12)
INSERT INTO Students VALUES ('Kobe', 'Report Designer', 1, 1.12)
INSERT INTO Students VALUES ('Steph', 'System Admin', 1, 1.30)

SELECT * FROM Students

SET IDENTITY_INSERT Students ON
DBCC CHECKIDENT('Students', RESEED, 4)