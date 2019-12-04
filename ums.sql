-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 04, 2019 at 04:32 PM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ums`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `dob` text,
  `type` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `fname`, `lname`, `dob`, `type`) VALUES
(1, 'admin', '$2b$15$vnH3RwoI7cgbfdlfKzk8p.hRX2xIROh0avFSYOG3pNSU09RdFgT5y', 'jackson', 'John', '', 0),
(7, 'dsadsadsa', '$2b$15$vlaszu0lgmah/KBiasTvuOnB7vrRHaaWajnwxsKPIhvnECQ2vxlRi', 'asasas', 'asasa', '2019-11-28T18:30:00.000Z', 1),
(8, 'dsadsadsa', '$2b$15$vnH3RwoI7cgbfdlfKzk8p.hRX2xIROh0avFSYOG3pNSU09RdFgT5y', 'asasas', 'asasa', '2019-11-28T18:30:00.000Z', 1),
(11, 'sadsad', '$2b$15$bR9mSSi4yOhny0WSLScKt.CKW6olCjxAb5wY3vBmHT4nkPYgclMOS', 'sassadsd', 'sadasdsad', '2019-11-25T18:30:00.000Z', 1),
(21, 'jackson.john', '$2b$15$Fs.FypdNsXXZ2b4pkkYpxuCB79ZiSgBCiNSAvX96084c6nnzx2fN6', 'Jackson', 'John', '2009-09-17T18:30:00.000Z', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
