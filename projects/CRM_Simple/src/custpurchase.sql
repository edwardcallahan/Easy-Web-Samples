-- MySQL dump 10.13  Distrib 5.1.48, for Win64 (unknown)
--
-- Host: localhost    Database: custpurchase
-- ------------------------------------------------------
-- Server version	5.1.48-community

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Create custpurchase
--

CREATE DATABASE IF NOT EXISTS custpurchase;
USE custpurchase;

--
-- Table structure for table `cpuser`
--

DROP TABLE IF EXISTS `cpuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cpuser` (
  `uname` varchar(30) NOT NULL DEFAULT '',
  `pword` varchar(30) DEFAULT NULL,
  `urole` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`uname`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cpuser`
--

LOCK TABLES `cpuser` WRITE;
/*!40000 ALTER TABLE `cpuser` DISABLE KEYS */;
INSERT INTO `cpuser` VALUES ('admin','admin','admin'),('manager','manager','manager'),('user','user','user');
/*!40000 ALTER TABLE `cpuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `custid` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(60) NOT NULL,
  `address` varchar(60) DEFAULT NULL,
  `city` varchar(60) DEFAULT NULL,
  `state` varchar(60) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `imageurl` varchar(64) DEFAULT NULL,
  `twitter` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`custid`),
  UNIQUE KEY `custid` (`custid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Aardvark Books','227 Church St','San Francisco','CA','94114','http://dev.wavemaker.com/example/comedians/johnbelushi.jpg','WaveMakerDev'),(2,'Cover to Cover','1307 Castro Street','San Francisco','CA','94114','http://dev.wavemaker.com/example/comedians/georgeburns.jpg','SpringSource'),(3,'Phoenix Books','3850 24th Street','San Francisco','CA','94114','http://dev.wavemaker.com/example/comedians/harpomarx.jpg','dojo'),(4,'Mystery Bookstore','4175 24th Street','San Francisco','CA','94114','http://dev.wavemaker.com/example/comedians/danackroyd.jpg','paul_irish'),(5,'Billy  Books','233 3rd Street','San Francisco','CA','94110','http://dev.wavemaker.com/example/comedians/harpomarx.jpg','vFabric'),(6,'City Lights Books','1320 Howard Street','San Francisco','CA','94110','http://dev.wavemaker.com/example/comedians/stanleylaurel.jpg','vCTO'),(7,'Stacys Books','433 Mission Sreet','San Francisco','CA','94110','http://dev.wavemaker.com/example/comedians/oliverhardy.jpg','html5'),(8,'Fog City Books','2333 Guerrero Street','San Francisco','CA','94114','http://dev.wavemaker.com/example/comedians/oliverhardy.jpg','starbuxman'),(9,'Read More Books','4552 Clipper Street','Austin','TX','50013','http://dev.wavemaker.com/example/comedians/carolburnett.jpg','VMware'),(10,'Me Too Books','5136 Sanchez Street','Portland','OR','97405','http://dev.wavemaker.com/example/comedians/willrogers.jpg','mozlabs');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `itemid` int(11) NOT NULL AUTO_INCREMENT,
  `itemname` varchar(32) DEFAULT NULL,
  `price` decimal(32,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`itemid`),
  UNIQUE KEY `itemid` (`itemid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'Crossing the Chasm','17.99'),(2,'Kidnapped','12.99'),(3,'The Mythical Man-month','21.89'),(4,'Pride and Prejudice','7.99'),(5,'Wuthering Heights','21.99'),(6,'One Minute Manager','5.99'),(7,'Mastering Dojo','41.99'),(8,'Ajax for Dummies','22.99'),(9,'Country Blues Guitar','12.99'),(10,'Gravitys Rainbow','11.99');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase` (
  `orderid` int(11) NOT NULL AUTO_INCREMENT,
  `custid` int(11) NOT NULL,
  `orderdate` date DEFAULT NULL,
  PRIMARY KEY (`orderid`),
  UNIQUE KEY `orderid` (`orderid`),
  KEY `custid` (`custid`),
  CONSTRAINT `FK_purchase_rel_customer` FOREIGN KEY (`custid`) REFERENCES `customer` (`custid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
INSERT INTO `purchase` VALUES (1,1,'2007-04-03'),(2,1,'2007-03-16'),(3,2,'2007-03-12'),(4,3,'2007-01-01'),(5,4,'2007-02-22'),(6,5,'2008-06-11'),(7,6,'2008-01-07'),(8,7,'2008-02-07'),(9,8,'2008-03-03'),(10,9,'2008-04-01'),(11,10,'2008-01-05'),(12,1,'2007-08-09'),(13,1,'2008-01-20'),(14,1,'2008-02-13'),(15,1,'2008-04-05'),(16,1,'2008-06-10'),(17,2,'2008-03-12'),(18,2,'2008-04-16'),(19,2,'2008-05-03'),(20,3,'2008-06-28'),(21,5,'2010-10-12'),(22,7,'2010-10-21'),(23,2,'2010-10-11'),(24,1,'2010-10-12');
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

--
-- Table structure for table `lineitem`
--

DROP TABLE IF EXISTS `lineitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lineitem` (
  `lineitemid` int(11) NOT NULL AUTO_INCREMENT,
  `orderid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`lineitemid`),
  KEY `orderidindex` (`orderid`),
  KEY `itemidindex` (`itemid`),
  CONSTRAINT `FK_relitem` FOREIGN KEY (`itemid`) REFERENCES `item` (`itemid`),
  CONSTRAINT `FK_relorder` FOREIGN KEY (`orderid`) REFERENCES `purchase` (`orderid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lineitem`
--

LOCK TABLES `lineitem` WRITE;
/*!40000 ALTER TABLE `lineitem` DISABLE KEYS */;
INSERT INTO `lineitem` VALUES (1,1,1,2),(2,1,3,1),(3,1,4,3),(4,1,7,4),(5,1,8,3),(6,1,9,1),(7,1,10,5),(8,2,1,5),(9,3,2,2),(10,4,2,2),(11,4,3,1),(12,5,1,1),(13,5,7,1),(14,6,3,1),(15,6,9,2),(16,7,2,1),(17,7,6,2),(18,8,3,2),(19,8,4,1),(20,9,2,2),(21,9,10,1),(22,10,4,1),(23,10,10,3),(24,11,8,1),(25,11,9,2),(26,12,4,1),(27,12,7,2),(28,13,7,2),(29,13,9,1),(30,14,5,1),(31,14,8,21),(32,15,2,1),(33,15,7,2),(34,16,2,1),(35,16,8,1),(36,17,2,1),(37,17,5,8),(38,18,3,3),(39,18,4,1),(40,18,6,1),(41,18,9,1),(42,18,10,2),(43,19,1,3),(44,19,8,2),(45,20,1,1),(46,20,2,3),(47,20,3,4),(48,20,4,1),(49,20,5,3),(50,20,6,1),(51,20,7,3),(52,20,8,4),(53,20,9,5),(54,20,10,3);
/*!40000 ALTER TABLE `lineitem` ENABLE KEYS */;
UNLOCK TABLES;

-- Dump completed on 2012-12-02 13:06:37
