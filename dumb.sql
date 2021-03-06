-- MySQL dump 10.13  Distrib 8.0.13, for macos10.14 (x86_64)
--
-- Host: localhost    Database: thread
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `event_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `event_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `event_postal_code` int(4) NOT NULL,
  `event_city` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `event_geo_lat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `event_geo_lng` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `event_start_date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `event_end_date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `event_start_hour` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `event_end_hour` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `event_agenda` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `event_language` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `max_participants` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `event_URL` varchar(2083) COLLATE utf8_unicode_ci NOT NULL,
  `event_theme_image` varchar(2083) COLLATE utf8_unicode_ci NOT NULL,
  `contact_person` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `contact_phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `contact_email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `db_type` varchar(45) COLLATE utf8_unicode_ci DEFAULT 'events',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'FENUUNssd','DIY and handicraft event','Ågade 10 Kolding',6000,'Vordingborgsf','55.4863','9.48038','2018-09-06','2018-09-06','17:00:00','20:00:00','Donec ut dolor.','Danish','30','https://www.facebook.com/groups/2005186493067196/?fref=nf','https://s3.us-east-2.amazonaws.com/hyf-thread-class05/FENUUN_DIY_Event.jpeg','Solveig Solando','+45 53 32 61 30','sbs@dskd.dk',0,'events'),(2,'Sultanas modeshow','Fashion show','Skolesiden 4 Brønshøj',2700,'Brønshøj','55.7191','12.4844','2018-10-12','2018-10-12','16:30:00','20:00:00','sewing Lorema ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.','Danish','1000','https://github.com/tellus/nulla/ut/erat/id/mauris.jsp?non=venenatis&mauris=lacinia&morbi=aenean&non=sit&lectus=amet&aliquam=justo&sit=morbi&amet=ut&diam=odio&in=cras&magna=mi&bibendum=pede&imperdiet=malesuada&nullam=in&orci=imperdiet&pede=et&venenatis=commodo&non=vulputate&sodales=justo&sed=in&tincidunt=blandit&eu=ultrices&felis=enim&fusce=lorem&posuere=ipsum&felis=dolor&sed=sit&lacus=amet&morbi=consectetuer&sem=adipiscing&mauris=elit&laoreet=proin&ut=interdum&rhoncus=mauris&aliquet=non&pulvinar=ligula&sed=pellentesque&nisl=ultrices&nunc=phasellus&rhoncus=id&dui=sapien&vel=in&sem=sapien','https://picsum.photos/299/301/?random','Henriette Rolf Lassen','+45 29 91 90 61','hrl@webnetmail.dk',1,'events'),(3,'Bliv din egen chef/Self-employment course','Workshop and course','Langhusvej 89 Brønshøj',2700,'Brønshøj','55.7039','12.5006','2018-09-22','2018-09-22','16:00:00','19:00:00','Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.','Danish and English','10','http://seesaa.net/tincidunt/lacus/at/velit/vivamus/vel/nulla.jpg?vivamus=massa&vel=donec&nulla=dapibus&eget=duis&eros=at&elementum=velit&pellentesque=eu&quisque=est&porta=congue&volutpat=elementum&erat=in&quisque=hac&erat=habitasse&eros=platea&viverra=dictumst&eget=morbi&congue=vestibulum&eget=velit&semper=id&rutrum=pretium&nulla=iaculis&nunc=diam&purus=erat&phasellus=fermentum&in=justo&felis=nec&donec=condimentum&semper=neque&sapien=sapien&a=placerat&libero=ante&nam=nulla&dui=justo&proin=aliquam&leo=quis&odio=turpis&porttitor=eget&id=elit&consequat=sodales','https://picsum.photos/300/300/?random','Egzona Haxha. Jens Jensen','+45 59 45 42 92','egzona@hum.ku.dk',1,'events'),(4,'Den Orientalske Bryllupsmesse 2018','International wedding fair','Frederikssundvej 264 Brønshøj',2700,'Brønshøj','55.7039','12.5006','2018-11-04','2018-11-04','11:00:00','18:30:00','Landjaeger boudin ham prosciutto ham hock chuck short loin fatback kevin biltong. Kielbasa doner shank, boudin pastrami tri-tip ham frankfurter ground round rump. Sausage flank frankfurter, prosciutto drumstick ground round venison shankle andouille pork chop. Cow chicken rump beef ribs. Ham hock venison pork beef pork belly pancetta. Spare ribs landjaeger jowl fatback beef, buffalo shoulder short loin kevin porchetta turkey tongue sirloin. Beef hamburger meatloaf short loin meatball, tri-tip ham pork belly capicola shoulder chuck cupim.','Danish and English','No limit','https://salamtickets.salamplanet.com/da/event-detail/MEP','https://picsum.photos/302/300/?random','Henriette Rolf Lassen','+45 25 71 75 27','info@marokkansk-eventplanner.dk',1,'events'),(5,'Kreativ Textil Workshop','DIY and handicraft workshopExercises/cooking/ handicraft and socialising','Langhusvej 89 BrønshøjBispebjerg Bakke 6 København',2700,'Brønshøj','55.7039','12.5006','2019-10-16','2019-10-31','16:00:00','19:00:00','Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.','Danish/Arabic/Kurdish/Turkish and English','No limit','https://www.facebook.com/groups/1479024512395560/','https://picsum.photos/300/301/?random','Lise-Lotte Duch','+45 29 91 90 61','hrl@webnetmail.dk',1,'events'),(6,'Fakti motion','Working with Refugee Women Knitting event','A.C. Meyers Vænge 15 København',2400,'København','55.7106','12.5396','2018-10-24','2018-12-12','12:30:00','13:30:00','Etiam vel augue. Vestibulum rutrum rutrum neque.','Danish/Arabic/Turkish/Farsi and English','No limit','http://fakti.dk','https://picsum.photos/301/300/?random','Mina Jaf','+45 28 40 92 25','lise-lotte@fakti.dk',1,'events'),(7,'Women Refugee Route Training','Textile technique workshop','Nyborggade 13 København',2450,'København','55.6505','12.5429','2018-11-03','2018-11-04','08:30:00','18:00:00','Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.','English','30','https://www.facebook.com/events/2010440628994933/','https://picsum.photos/300/299/?random','Jens Jensen','+45 12 34 56 78','training@womenrefugeeroute.org',1,'events'),(8,'Hæklefest','Lecture and debate on diversity and mental illnesses','Glentevej 67 København',2100,'København','55.7098','12.58','2018-10-27','2018-10-27','10:00:00','21:00:00','sewing In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.','Danish','No limit','https://www.facebook.com/events/1675009949264012/','https://picsum.photos/299/300/?random','Rasmus Rasmusen','+45 35 11 00 06','facebook@knitwork.dk',1,'events'),(9,'Mønsterdesign og rapporttryk i lange baner','DIY and handicraft event','Teglværksgade 22 København',2400,'København','55.6769','12.3982','2018-11-10','2018-11-11','10:00:00','16:00:00','Praesent lectus.','Danish','No limit','https://billetto.dk/da/e/monster-design-og-rapport-tryk-i-lange-baner-billetter-307222','https://picsum.photos/301/299/?random','Peter Petersen','+45 33 66 30 00','bibliotek@kff.kk.dk',1,'events'),(10,'Özlem Cekic om Mangfoldighed og Psykisk sygdom','Fashion show','Ågade 10 Kolding',2100,'København','55.7071','12.5595','2018-12-11','2018-12-11','16:00:00','18:00:00','In congue.','Danish','No limit','https://www.facebook.com/events/705576196474459/','https://picsum.photos/299/299/?random','Solveig Solando','+45 39 16 09 10','fh@fountain-house.dk',1,'events'),(11,'Event Test','DIY thinggy','Voldgade',4760,'Vordingborg','55.0136876','11.9060182','data','adagw','gwegsdg','wegsdgsd','sdahfsdah','','hdfhdfsh','https://picsum.photos/295/301/?random','https://picsum.photos/295/301/?random','gdsj','','majd.ss@hotmail.com',1,'events');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `internships`
--

DROP TABLE IF EXISTS `internships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `internships` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `internship_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `internship_category` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `organisation_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `department` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `internship_description` text COLLATE utf8_unicode_ci NOT NULL,
  `organisation_description` text COLLATE utf8_unicode_ci NOT NULL,
  `internship_agreement` tinyint(1) NOT NULL,
  `internship_requirements` tinyint(1) NOT NULL,
  `application_requirements` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `internship_availabiltiy_schedule` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `travel_expenses` tinyint(1) NOT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `internship_add_date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `closing_date` tinyint(1) NOT NULL,
  `internship_deadline` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_person` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone_contact` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_contact` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `organisation_address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `organisation_website` varchar(2083) COLLATE utf8_unicode_ci DEFAULT NULL,
  `internship_theme_image` varchar(2083) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `db_type` varchar(45) COLLATE utf8_unicode_ci DEFAULT 'internships',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `internships`
--

LOCK TABLES `internships` WRITE;
/*!40000 ALTER TABLE `internships` DISABLE KEYS */;
INSERT INTO `internships` VALUES (1,'Sales Assistant','3 months (gold)','EDIEee','Sales','In 3 4 weeks you will learn about: Retail/Brands/Clothing&Accessories and Danish work culture','EDIE is a new clothing store based in the heart of Copenhagen with a concept that connects sustainability and high end fashion',1,0,'Muhabet','Monday-Friday: 11-18 and Saturday: 11-17',0,'Copenhagen K','2018-10-01 00:00:00',1,'2018-11-01 00:00:00','Christina Wiesner','+45 31 32 56 30','info@edie.dk','Kompagnistræde 10','https://edie.dk','https://picsum.photos/301/300/?random',1,'internships'),(2,'Product Development Assistant','3 weeks (silver)','Center for textile research Design','Marketing','In 3 months you will learn about: design process/textile production/re- and upcycling and sales','Center for Textile Research is located within the University of Copenhagen on Islands brygge',1,1,'Muhabet/sewing and tailor skills','Monday-Friday: 8-17',1,'Copenhagen S','2018-10-05 00:00:00',1,'2018-11-02 00:00:00','Egzona Haxha','+45 60 86 32 17','egzona@hum.ku.dk','Karen Blixens Plads 8','https://www.facebook.com/threadcopenhagen/','https://picsum.photos/302/300/?random',1,'internships'),(3,'Textile Production Assistant','3 days (bronze)','Vanilie','Product Design','In 3 days you will learn about: design process/textile production and exhibition','Design Vanilie is a company that facilitates the work of refugee women within design and creation of textile products',1,1,'Muhabet/sewing and tailor skills','Tuesday and Thursday 16-19',0,'Brønshøj','2018-10-05 00:00:00',0,'2019-04-01 00:00:00','Henriette Rolf Lassen','+45 29 91 90 61','hrl@webnetmail.dk','Skolesiden 4','blank','https://picsum.photos/303/300/?random',1,'internships'),(4,'Intern','3 months (gold)','Vikingelandsbyen','Tourism','In 3 months you will learn about: textile production and reconstructions in museums and guided tours','Vikingelandsbyen - the Viking Village - is an open air museum. It established an association for immigrants and refugees in the area of Albertslund more than 10 years ago and to this day the museum and association remains a go-to place for people who wish to socialise and learn different craft skills such as construction and textile production',1,1,'Muhabet','Monday-Friday: 8-17',0,'Albertslund','2018-10-05 00:00:00',1,'2019-02-01 00:00:00','Maria Ojantakanen','+45 43 64 20 29','maria.ojantakanen@albertslund.dk','Ledøjevej 35','https://www.vikingelandsbyen.dk','https://picsum.photos/304/300/?random',1,'internships'),(5,'Intern','3 weeks (silver)','Albertslund University College Copenhagen/KP','Research and education','In 3 weeks you will collaborate with students from different programs in UCC and learn about: textile productions/ designs and exhibitions',' \"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.\",',1,1,'Muhabet','Monday-Friday: 8-17',0,'Copenhagen','2018-10-08 00:00:00',1,'2019-05-01 00:00:00','Joy Fonseca','+45 70 89 09 90','joyf@ucc.dk','Humletorvet 3','https://ucc.dk/','https://picsum.photos/305/300/?random',1,'internships'),(6,'Wardrobe Informant','3 days (bronze)','Design School Kolding','Research and education','In 3 days you will teach researchers from wardrobe studies about your style and wardrobe','https://picsum.photos/302/300/?random',1,1,'Muhabet','Monday-Friday: 8-17',0,'Kolding and Copenhagen','2018-10-07 00:00:00',1,'2019-06-01 00:00:00','Solveig Solando','+45 53 32 61 30','sbs@dskd.dk','Ågade 10','https://www.designskolenkolding.dk','https://picsum.photos/300/301/?random',1,'internships'),(7,'Florist','3 weeks (silver)','Flower Atelier','Product design and sales','In 3 weeks you will learn about: flower binding and exclusive flower designs','https://picsum.photos/303/300/?random',1,1,'Muhabet','Tuesday-Friday: 10-16 and Saturday: 10-14',0,'Valby','2018-10-07 00:00:00',1,'2019-02-02 00:00:00','Amina Hussain','+45 53 32 09 08','info@floweratelier.dk','Valby langgade 191','https://da-dk.facebook.com/flowerAtelierdk/','https://picsum.photos/300/302/?random',1,'internships'),(8,'Intern','3 days (bronze)','Henrik Vibskov','Product manufacturing','In 3 days you will learn about: design process/textile production and exhibition',' \"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.\",',1,1,'Muhabet/sewing skills','Monday-Friday: 8-17',0,'Copenhagen K','2018-10-17 00:00:00',1,'2018-12-12 00:00:00','Susanne Hoffmann','+45 33 14 61 00','hv@henrikvibskov.dk','Krystalgade 6','https://henrikvibskovboutique.com','https://picsum.photos/300/303/?random',1,'internships'),(9,'Intern','3 months (gold)','National Museum of Denmark','Tourism','In 3 months you will learn about: textile objects/exhibitions and guided tours','The National Museum of Denmark in Copenhagen is Denmark’s largest museum of cultural history/ comprising the histories of Danish and foreign cultures alike',1,1,'Muhabet','Monday-Friday: 8-17',0,'Copenhagen K','2018-10-18 00:00:00',1,'2019-04-01 00:00:00','Gitte Engholm','+45 41 20 60 50','gitte.engholm@natmus.dk','Ny Vestergade 10','https://natmus.dk/','https://picsum.photos/300/304/?random',1,'internships'),(10,'Intern','3 weeks (silver)','National Museum of Denmark','Research and education','In 3 weeks you will learn about and look into: textile archives/objects and the projects in the museum',' \"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.\",',1,1,'Muhabet and BA degree within History or Archaeology','Monday-Friday: 8-17',0,'Copenhagen K','2018-10-13 00:00:00',1,'2019-09-01 00:00:00','Gitte Engholm','+45 41 20 60 50','gitte.engholm@natmus.dk','Ny Vestergade 10','https://natmus.dk/','https://picsum.photos/300/305/?random',1,'internships');
/*!40000 ALTER TABLE `internships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentors`
--

DROP TABLE IF EXISTS `mentors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `mentors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `profile_picture` varchar(2083) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mentor_description` text COLLATE utf8_unicode_ci,
  `languages` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `availability` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `offering` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `area_location` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `preferred_meeting_place` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `affiliation` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `db_type` varchar(45) COLLATE utf8_unicode_ci DEFAULT 'mentors',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentors`
--

LOCK TABLES `mentors` WRITE;
/*!40000 ALTER TABLE `mentors` DISABLE KEYS */;
INSERT INTO `mentors` VALUES (1,'Güler','Yagci','guler@tingbjerg.com','Female','https://picsum.photos/299/300/?random','Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.','Danish/Turkish/English','Every Tuesday from 04:00 PM to 07:00 PM','Networking','Region Zealand','Brønshøj Copenhagen N','igne:oya',1,'mentors'),(2,'Mike','Nord','sl@kontiki.fr','Male','https://picsum.photos/299/301/?random','Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.','Danish/French/English','Every Thursday from 12:00 PM to 03:00 PM','Networking/Self-employment/Terminology research','Region Zealand','Islands Brygge Copenhagen S','Termplus',0,'mentors'),(3,'Marie','Buffay','egzona@hum.ku.dk','Female','https://picsum.photos/299/299/?random','Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.','Danish/English/Albanian','Every Thursday from 08:00 AM to 12:00 PM','CVs/Job and internship applications','Region Zealand','Islands Brygge Copenhagen S','University of Copenhagen',1,'mentors'),(4,'Manhal','Albarazi','manhalbarazie@gmail.com','Female','https://picsum.photos/302/299/?random','Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.','English/Arabic','Flexible','Support/Networking','Region Zealand','Køge or Ølby','University of Copenhagen',1,'mentors'),(5,'Jens','Jensen','jens.jensen@randomemail.com','Male','https://picsum.photos/302/299/?random','Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.','Danish','Flexible','Networking','Region Zealand','Nørrebro','blank',0,'mentors'),(6,'Rasmus','Klump','rklump@cartoon.dk','Male','https://picsum.photos/300/299/?random','Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.','Danish','Every Sundays from 10:00 AM to 12:00 PM','CVs','Jylland','Aalborg','Aalborg University',1,'mentors'),(7,'Mila','Daisy','daisy@denmarkskingdom.dk','Female','https://picsum.photos/298/301/?random','sewing Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.','Danish/French/English','Everyday from 10:00 AM to 11:00 AM','Danish Culture/Danish History','Region Zealand','Greater Copenhagen','Royal House of Denmark',1,'mentors'),(8,'Hans Christian','Andersen','hcandersen@writer.dk','Male','https://picsum.photos/301/302/?random','Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.','Danish','blank','Danish Culture/Danish History','Fyn','Odense','University of Copenhagen',1,'mentors'),(9,'Tove Irma Margit','Ditlevsen','tditlevsen@writer.dk','Female','https://picsum.photos/300/298/?random','sewing Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.','Danish','blank','Danish Culture','Region Zealand','Copenhagen','University of Copenhagen',1,'mentors'),(10,'Nikolaj','Coster-Waldau','ncw@actor.dk','Male','https://picsum.photos/303/299/?random','Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.','Danish/English','First Sunday of the Month from 10:00 AM to 12:00 PM','CVs','Langeland','Rudkøbing','Danish National School of Theatre and Contemporary Dance',1,'mentors');
/*!40000 ALTER TABLE `mentors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `networking`
--

DROP TABLE IF EXISTS `networking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `networking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `organisation_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sector_activity` enum('NGO','Private company','Public sector') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `organisation_description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `organisation_logo` varchar(2083) COLLATE utf8_unicode_ci DEFAULT NULL,
  `organisation_url` varchar(2083) COLLATE utf8_unicode_ci DEFAULT NULL,
  `organisation_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `organisation_city` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `organisation_postal_code` int(4) unsigned NOT NULL,
  `contact_person` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `contact_email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `contact_phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `db_type` varchar(45) COLLATE utf8_unicode_ci DEFAULT 'networking',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `networking`
--

LOCK TABLES `networking` WRITE;
/*!40000 ALTER TABLE `networking` DISABLE KEYS */;
INSERT INTO `networking` VALUES (1,'The Syrian Cultural Institute in Denmark','NGO','The Syrian Cultural institute in Denmark conducts surveys to empower cultural understanding in Denmark and arranges cultural and social events in order to create an equal and safe environment where Syrians and Danes can meet across cultures.','https://s3.us-east-2.amazonaws.com/hyf-thread-class05/SKDNetworking.png','http://syriskkulturinstitut.dk','Fælledvej 12  4. sal København N','Copenhagen N',2200,'Buthaina Shaheen','kontakt@syriskkulturinstitut.dk','+45 52 17 47 35',1,'networking'),(2,'igne:oya','Private company','Design Vanilie is a company that facilitates the art and work of refugee women within design and creation of textile products. The feeling of equality and safety is a crucial factor within Design Vanilie.','https://s3.us-east-2.amazonaws.com/hyf-thread-class05/IgneOyaNetworking.jpg','https://www.facebook.com/igneoyacph/','Bülowsvej Frederiksberg','Brønshøj',2700,'Henriette Rolf Lassen','hrl@webnetmail.dk','+45 29 91 90 61',1,'networking'),(3,'FAKTI','NGO','Fakti is an association located right between Nørrebro and Nordvest. Its members are women from many different ethnicities who meet to socialise cook learn Danish and to do various other activities. It was founded by Lise-Lotte in 2002 and like Design Vanilie its space is centered around equality and safety.','https://s3.us-east-2.amazonaws.com/hyf-thread-class05/FaktiNetworking.png','http://fakti.dk','Bispebjerg Bakke 6 København N','Copenhagen N',2200,'Lise-lotte Duch','lise-lotte@fakti.dk','+45 28 40 92 25',1,'networking'),(4,'Venneforening Vikingelandsbyen','Public sector','Vikingelandsbyen sewing - the Viking Village - is an open air museum. It established an association for immigrants and refugees in the area of Albertslund more than 10 years ago and to this day the museum and association remains a go-to place for people who wish to socialise and learn different craft skills such as construction and textile production','https://s3.us-east-2.amazonaws.com/hyf-thread-class05/VikingelandsbyenNetworking.png','https://www.vikingelandsbyen.dk','Ledøjevej 35','Albertslund',2620,'Maria Ojantakanen','maria.ojantakanen@albertslund.dk','+45 43 64 20 29',1,'networking'),(5,'Aalborg University','Public sector','https://picsum.photos/301/300/?random','https://picsum.photos/301/300/?random','https://www.en.cgs.aau.dk/','Fredrik Bajers Vej 5','Aalborg',9100,'Henriette Badsberg Jensen','badsberg@cgs.aau.dk','+45 99 40 92 08',1,'networking'),(6,'Design school Kolding','Public sector','sewing','https://picsum.photos/302/300/?random','https://www.designskolenkolding.dk','Ågade 10','Kolding',6000,'Marie Mariesen','dk@designskolenkolding.dk','+45 76 30 11 00',1,'networking'),(7,'Henrik Vibskov - Designer','Private company','https://picsum.photos/303/300/?random','https://picsum.photos/303/300/?random','https://henrikvibskovboutique.com','Krystalgade 6','Copenhagen',1172,'Henrik Vibskov','hv@henrikvibskov.dk','+45 33 14 61 00',1,'networking'),(8,'Hack Your Future','NGO','sewing','https://picsum.photos/304/300/?random','https://www.hackyourfuture.dk/','Enghavevej 80','Copenhagen',2450,'Christopher Klüter','ck@hyf.dk','+45 12 34 56 00',1,'networking'),(9,'UCC - University College Copenhagen','Public sector','UCC offers study programmes and research activities that help to improve our welfare','https://s3.us-east-2.amazonaws.com/hyf-thread-class05/ucc_logo.png','https://ucc.dk/','Humletorvet 3','Copenhagen',1799,'Joy Fonseca','joyf@ucc.dk','+45 70 89 09 90',1,'networking'),(10,'TERMplus','Private company','https://picsum.photos/305/300/?random','https://picsum.photos/305/300/?random','http://www.termplus.dk/','Fruebjergvej 3','Copenhagen',2100,'Susanne Lervad','sltermplus.dk','+45 39 17 99 91',1,'networking');
/*!40000 ALTER TABLE `networking` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-25 14:32:57
