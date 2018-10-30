
CREATE TABLE `events`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `event_name` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `event_type` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `event_address` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `event_postal_code` int
(4) NOT NULL,
  `event_city` varchar
(45) COLLATE utf8_unicode_ci NOT NULL,
  `event_geo_lat` float NOT NULL,
  `event_geo_lng` float NOT NULL,
  `event_start_date` date NOT NULL,
  `event_end_date` date NOT NULL,
  `event_start_hour` time NOT NULL,
  `event_end_hour` time NOT NULL,
  `event_agenda` text COLLATE utf8_unicode_ci NOT NULL,
  `event_language` varchar
(45) COLLATE utf8_unicode_ci NOT NULL,
  `max_participants` int
(2) NOT NULL,
  `event_URL` varchar
(2083) COLLATE utf8_unicode_ci NOT NULL,
  `event_theme_image` varchar
(2083) COLLATE utf8_unicode_ci NOT NULL,
  `contact_person` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_phone` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_email` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint
(1) NOT NULL,
  PRIMARY KEY
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci


CREATE TABLE `internships`
(
  `id` int
(11) NOT NULL,
  `internship_title` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `internship_category` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `organisation_name` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `department` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `internship_description` text COLLATE utf8_unicode_ci NOT NULL,
  `organisation_description` text COLLATE utf8_unicode_ci NOT NULL,
  `internship_agreement` tinyint
(1) NOT NULL,
  `internship_requirements` tinyint
(1) NOT NULL,
  `application_requirements` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `internship_availabiltiy_schedule` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `travel_expenses` tinyint
(1) NOT NULL,
  `location` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `internship_add_date` datetime NOT NULL,
  `closing_date` tinyint
(1) NOT NULL,
  `internship_deadline` datetime NOT NULL,
  `contact_person` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone_contact` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_contact` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `organisation_address` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `organisation_website` varchar
(2083) COLLATE utf8_unicode_ci NOT NULL,
  `internship_theme_image` varchar
(2083) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint
(1) NOT NULL,
  PRIMARY KEY
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci


CREATE TABLE mentor (
    `list_id`
(11) NOT NULL AUTO_INCREMENT,
    `list_first_name` VARCHAR
(255) CHARACTER
SET
utf8,
    `list_last_name` VARCHAR
(255) CHARACTER
SET
utf8,
    `list_email` VARCHAR
(255) CHARACTER
SET
utf8,
    `list_gender` VARCHAR
(255) CHARACTER
SET
utf8,
    `list_profile_picture` VARCHAR
(255) CHARACTER
SET
utf8,
    `list_mentor_description` VARCHAR
(255) CHARACTER
SET
utf8,
    `list_languages` VARCHAR
(255) CHARACTER
SET
utf8,
    `list_availability` VARCHAR
(255) CHARACTER
SET
utf8,
    `list_offering` VARCHAR
(255) CHARACTER
SET
utf8,
    `list_area_location` VARCHAR
(14) CHARACTER
SET
utf8,
    `list_preferred_meeting_place` VARCHAR
(27) CHARACTER
SET
utf8,
    `list_affiliation` VARCHAR
(56) CHARACTER
SET
utf8,
    `list_active` VARCHAR
(5) CHARACTER
SET utf8
PRIMARY KEY
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci


CREATE TABLE `networking`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `organisation_name` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `sector_activity` enum
('NGO','Private company','Public sector') COLLATE utf8_unicode_ci NOT NULL,
  `organisation_description` text COLLATE utf8_unicode_ci NOT NULL,
  `organisation_logo` varchar
(2083) COLLATE utf8_unicode_ci NOT NULL,
  `organisation_url` varchar
(2083) COLLATE utf8_unicode_ci NOT NULL,
  `organisation_address` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `organisation_city` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `organisation_postal_code` int
(4) unsigned NOT NULL,
  `contact_person` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_email` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_phone` varchar
(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint
(1) NOT NULL,
  PRIMARY KEY
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci




INSERT INTO events
VALUES
	(1, 'FENUUN', 'DIY and handicraft event', 'Ågade 10 Kolding', 6000, 'Kolding', 55.48631, 9.48038, '2018-09-06 00:00:00', '2018-09-06 00:00:00', '17:00', '20:00', 'Donec ut dolor.', 'Danish', '30', 'https://www.facebook.com/groups/2005186493067196/?fref=nf', 'https://s3.us-east-2.amazonaws.com/hyf-thread-class05/FENUUN_DIY_Event.jpeg', 'Solveig Solando', '+45 53 32 61 30', 'sbs@dskd.dk', 1),
	(2, 'Sultanas modeshow', 'Fashion show', 'Skolesiden 4 Brønshøj', 2700, 'Brønshøj', 55.7191, 12.48436, '2018-10-12 00:00:00', '2018-10-12 00:00:00', '16:30', '20:00', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', 'Danish', '100', 'https://github.com/tellus/nulla/ut/erat/id/mauris.jsp?non=venenatis&mauris=lacinia&morbi=aenean&non=sit&lectus=amet&aliquam=justo&sit=morbi&amet=ut&diam=odio&in=cras&magna=mi&bibendum=pede&imperdiet=malesuada&nullam=in&orci=imperdiet&pede=et&venenatis=commodo&non=vulputate&sodales=justo&sed=in&tincidunt=blandit&eu=ultrices&felis=enim&fusce=lorem&posuere=ipsum&felis=dolor&sed=sit&lacus=amet&morbi=consectetuer&sem=adipiscing&mauris=elit&laoreet=proin&ut=interdum&rhoncus=mauris&aliquet=non&pulvinar=ligula&sed=pellentesque&nisl=ultrices&nunc=phasellus&rhoncus=id&dui=sapien&vel=in&sem=sapien', 'https://dummyimage.com/400x150.png/dddddd/000000', 'Henriette Rolf Lassen', '+45 29 91 90 61', 'hrl@webnetmail.dk', 1),
	(3, 'Bliv din egen chef/Self-employment course', 'Workshop and course', 'Langhusvej 89 Brønshøj', 2700, 'Brønshøj', 55.703894, 12.500613, '2018-09-22 00:00:00', '2018-09-22 00:00:00', '16:00', '19:00', 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'Danish and English', '10', 'http://seesaa.net/tincidunt/lacus/at/velit/vivamus/vel/nulla.jpg?vivamus=massa&vel=donec&nulla=dapibus&eget=duis&eros=at&elementum=velit&pellentesque=eu&quisque=est&porta=congue&volutpat=elementum&erat=in&quisque=hac&erat=habitasse&eros=platea&viverra=dictumst&eget=morbi&congue=vestibulum&eget=velit&semper=id&rutrum=pretium&nulla=iaculis&nunc=diam&purus=erat&phasellus=fermentum&in=justo&felis=nec&donec=condimentum&semper=neque&sapien=sapien&a=placerat&libero=ante&nam=nulla&dui=justo&proin=aliquam&leo=quis&odio=turpis&porttitor=eget&id=elit&consequat=sodales', 'https://dummyimage.com/400x150.png/dddddd/000000', 'Egzona Haxha. Jens Jensen', '+45 59 45 42 92', 'egzona@hum.ku.dk', 1),
	(4, 'Den Orientalske Bryllupsmesse 2018', 'International wedding fair', 'Frederikssundvej 264 Brønshøj', 2700, 'Brønshøj', 55.703894, 12.500613, '2018-11-04 00:00:00', '2018-11-04 00:00:00', '11:00', '18:30', 'In quis justo.', 'Danish and English', 'No limit', 'https://salamtickets.salamplanet.com/da/event-detail/MEP', 'https://dummyimage.com/400x150.png/dddddd/000000', 'Henriette Rolf Lassen', '+45 25 71 75 27', 'info@marokkansk-eventplanner.dk', 1),
	(5, 'Kreativ Textil Workshop', 'DIY and handicraft workshopExercises/cooking/ handicraft and socialising', 'Langhusvej 89 BrønshøjBispebjerg Bakke 6 København', 2700, 'Brønshøj', 55.703894, 12.500613, '2019-10-16 00:00:00', '2019-10-31 00:00:00', '16:00', '19:00', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.', 'Danish/Arabic/Kurdish/Turkish and English', 'No limit', 'https://www.facebook.com/groups/1479024512395560/', 'https://dummyimage.com/400x150.png/dddddd/00000', 'Lise-Lotte Duch', '+45 29 91 90 61', 'hrl@webnetmail.dk', 1),
	(6, 'Fakti motion', 'Working with Refugee Women Knitting event', 'A.C. Meyers Vænge 15 København', 2400, 'København', 55.71061, 12.5396, '2018-10-24 00:00:00', '2018-12-12 00:00:00', '12:30', '13:30', 'Etiam vel augue. Vestibulum rutrum rutrum neque.', 'Danish/Arabic/Turkish/Farsi and English', 'No limit', 'http://fakti.dk', 'https://s3.us-east-2.amazonaws.com/hyf-thread-class05/Women_Refugee_Training_Event.png', 'Mina Jaf', '+45 28 40 92 25', 'lise-lotte@fakti.dk', 1),
	(7, 'Women Refugee Route Training', 'Textile technique workshop', 'Nyborggade 13 København', 2450, 'København', 55.650471, 12.54293, '2018-11-03 00:00:00', '2018-11-04 00:00:00', '8:30', '18:00', 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.', 'English', '30', 'https://www.facebook.com/events/2010440628994933/', 'https://s3.us-east-2.amazonaws.com/hyf-thread-class05/Fakti_motion_Event.jpg', 'Jens Jensen', '+45 12 34 56 78', 'training@womenrefugeeroute.org', 1),
	(8, 'Hæklefest', 'Lecture and debate on diversity and mental illnesses', 'Glentevej 67 København', 2100, 'København', 55.70983, 12.57995, '2018-10-27 00:00:00', '2018-10-27 00:00:00', '10:00', '21:00', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', 'Danish', 'No limit', 'https://www.facebook.com/events/1675009949264012/', 'https://dummyimage.com/400x150.png/dddddd/000000', 'Rasmus Rasmusen', '+45 35 11 00 06', 'facebook@knitwork.dk', 1),
	(9, 'Mønsterdesign og rapporttryk i lange baner', 'DIY and handicraft event', 'Teglværksgade 22 København', 2400, 'København', 55.67694, 12.39818, '2018-11-10 00:00:00', '2018-11-11 00:00:00', '10:00', '16:00', 'Praesent lectus.', 'Danish', 'No limit', 'https://billetto.dk/da/e/monster-design-og-rapport-tryk-i-lange-baner-billetter-307222', 'https://dummyimage.com/400x150.png/dddddd/000000', 'Peter Petersen', '+45 33 66 30 00', 'bibliotek@kff.kk.dk', 1),
	(10, 'Özlem Cekic om Mangfoldighed og Psykisk sygdom', 'Fashion show', 'Ågade 10 Kolding', 2100, 'København', 55.70709, 12.55951, '2018-12-11 00:00:00', '2018-12-11 00:00:00', '16:00', '18:00', 'In congue.', 'Danish', 'No limit', 'https://www.facebook.com/events/705576196474459/', 'https://dummyimage.com/400x150.png/dddddd/000000', 'Solveig Solando', '+45 39 16 09 10', 'fh@fountain-house.dk', 1);

INSERT INTO mentors
VALUES
	(1, 'Güler', 'Yagci', 'guler@tingbjerg.com', 'Female', 'http://dummyimage.com/90x90.png/5fa2dd/ffffff', 'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Danish/Turkish/English', 'Every Tuesday from 04:00 PM to 07:00 PM', 'Networking', 'Region Zealand', 'Brønshøj Copenhagen N', 'igne:oya', 1),
	(2, 'Susanne', 'Lervad', 'sl@kontiki.fr', 'Female', 'http://dummyimage.com/90x90.png/5fa2dd/ffffff', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'Danish/French/English', 'Every Thursday from 12:00 PM to 03:00 PM', 'Networking/Self-employment/Terminology research', 'Region Zealand', 'Islands Brygge Copenhagen S', 'Termplus', 1),
	(3, 'Egzona', 'Haxha', 'egzona@hum.ku.dk', 'Female', 'http://dummyimage.com/90x90.png/ff4444/ffffff', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'Danish/English/Albanian', 'Every Thursday from 08:00 AM to 12:00 PM', 'CVs/Job and internship applications', 'Region Zealand', 'Islands Brygge Copenhagen S', 'University of Copenhagen', 1),
	(4, 'Manhal', 'Albarazi', 'manhalbarazie@gmail.com', 'Female', 'http://dummyimage.com/90x90.png/5fa2dd/ffffff', 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 'English/Arabic', 'Flexible', 'Support/Networking', 'Region Zealand', 'Køge or Ølby', 'University of Copenhagen', 1),
	(5, 'Jens', 'Jensen', 'jens.jensen@randomemail.com', 'Male', 'http://dummyimage.com/90x90.png/cc0000/ffffff', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'Danish', 'Flexible', 'Networking', 'Region Zealand', 'Nørrebro', 'blank', 0),
	(6, 'Rasmus', 'Klump', 'rklump@cartoon.dk', 'Male', 'http://dummyimage.com/90x90.png/5fa2dd/ffffff', 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 'Danish', 'Every Sundays from 10:00 AM to 12:00 PM', 'CVs', 'Jylland', 'Aalborg', 'Aalborg University', 1),
	(7, 'Margrethe Alexandrine Þórhildur Ingrid', 'Daisy', 'daisy@denmarkskingdom.dk', 'Female', 'http://dummyimage.com/90x90.png/cc0000/ffffff', 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'Danish/French/English', 'Everyday from 10:00 AM to 11:00 AM', 'Danish Culture/Danish History', 'Region Zealand', 'Greater Copenhagen', 'Royal House of Denmark', 1),
	(8, 'Hans Christian', 'Andersen', 'hcandersen@writer.dk', 'Male', 'http://dummyimage.com/90x90.png/cc0000/ffffff', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 'Danish', 'blank', 'Danish Culture/Danish History', 'Fyn', 'Odense', 'University of Copenhagen', 1),
	(9, 'Tove Irma Margit', 'Ditlevsen', 'tditlevsen@writer.dk', 'Female', 'http://dummyimage.com/90x90.png/cc0000/ffffff', 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'Danish', 'blank', 'Danish Culture', 'Region Zealand', 'Copenhagen', 'University of Copenhagen', 1),
	(10, 'Nikolaj', 'Coster-Waldau', 'ncw@actor.dk', 'Male', 'http://dummyimage.com/90x90.png/dddddd/000000', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.', 'Danish/English', 'First Sunday of the Month from 10:00 AM to 12:00 PM', 'CVs', 'Langeland', 'Rudkøbing', 'Danish National School of Theatre and Contemporary Dance', 1);
