-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2020 at 08:47 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pilldispancer`
--

-- --------------------------------------------------------

--
-- Table structure for table `deviceslottimer`
--

CREATE TABLE `deviceslottimer` (
  `id` int(11) NOT NULL,
  `deviceID` int(11) NOT NULL,
  `slot` int(11) NOT NULL,
  `noOfPillsAvailable` int(11) NOT NULL,
  `time` time NOT NULL,
  `status` varchar(30) NOT NULL DEFAULT 'WAITING'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(70) NOT NULL,
  `pass` varchar(30) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'WAITING'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `pass`, `status`) VALUES
(1, 'Rushan', 'rushanJ@critssl.com', 'rushan', 'WAITING');

-- --------------------------------------------------------

--
-- Table structure for table `userdevice`
--

CREATE TABLE `userdevice` (
  `id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL,
  `user` int(11) NOT NULL,
  `deviceid` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userdevice`
--

INSERT INTO `userdevice` (`id`, `name`, `user`, `deviceid`) VALUES
(0, '', 1, 'a1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `userdevice`
--
ALTER TABLE `userdevice`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
