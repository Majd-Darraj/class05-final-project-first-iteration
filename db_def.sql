CREATE TABLE
IF NOT EXISTS `internships`
(
	`id` INT
(11)NOT NULL AUTO_INCREMENT,
	`created_at` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON
UPDATE CURRENT TIMESTAMP NOT NULL,
	`internship_title
` VARCHAR
(255) NOT NULL,
	`internship_category` VARCHAR
(255) NOT NULL,
	`internship_description` TEXT NOT NULL,
	`internship_agreement` BOOLEAN NOT NULL,
	`internship_requirements` BOOLEAN NOT NULL,
	`internship_availability_schedule` VARCHAR
(255) NOT NULL,
	`department` VARCHAR
(255) NOT NULL,
	`organisation_name` VARCHAR
(255) NOT NULL,
	`organisation_description` VARCHAR
(255) NOT NULL,
	`application_requirements` VARCHAR
(255) NOT NULL,
	`travel_expenses` VARCHAR
(255) NOT NULL,
	`location` VARCHAR
(255) NOT NULL,
	`internship_deadline` VARCHAR
(255) NOT NULL,
	`phone_contact` VARCHAR
(255) NOT NULL,
	`email_contact` VARCHAR
(255) NOT NULL,
	`organisation_address` VARCHAR
(255) NOT NULL,
	`organisation_website` VARCHAR
(255) NOT NULL,
	`internship_theme_image` VARCHAR
(255) NOT NULL,
	`is_active` BOOLEAN NOT NULL DEFAULT 1,
	PRIMARY KEY
(`id`)
)