-- db/seed_data.sql
-- This file contains seed data for the Gota Video Database.
-- It populates the user, video, view history, playlist, playlist_video, video_comment, and comment_thread tables.
-- 


use gota_video_db;
-- ----------------------------
-- Populate Users
-- ----------------------------
SET SQL_SAFE_UPDATES=0;
-- delete from user;user
-- ----------------------------
-- Populate Users (IDs start at 1000000)
-- ----------------------------
INSERT INTO user (id, username, email, password, avatar_url, channel_name, created_on)
VALUES
(1000000, 'alice_tech', 'alice@example.com', 'password1', 'src/assets/Profile.png', 'Alice Teaches Tech', NOW()),
(1000001, 'bob_sql', 'bob@example.com', 'password2', 'src/assets/Profile.png', 'Bob''s SQL Corner', NOW()),
(1000002, 'charlie_js', 'charlie@example.com', 'password3', 'src/assets/Profile.png', 'Charlie Codes', NOW()),
(1000003, 'dana_excel', 'dana@example.com', 'password4', 'src/assets/Profile.png', 'Excel with Dana', NOW()),
(1000004, 'eve_misc', 'eve@example.com', 'password5', 'src/assets/Profile.png', 'Eve''s Tutorials', NOW());

-- ----------------------------
-- Populate Videos
-- ----------------------------
INSERT INTO video (id, title, description, num_likes, url, user_id, thumbnail_url, created_at)
VALUES
(1, 'Beginner''s Guide to SQL', 'Learn the basics of SQL, including SELECT, INSERT, and UPDATE statements.', 45, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000001, 'src/assets/videomain_sample.png', NOW()),
(2, 'How to Create a Relational Database', 'Step-by-step guide on designing and building a relational database.', 38, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000001, 'src/assets/videomain_sample.png', NOW()),
(3, 'Beginner''s Guide to JavaScript', 'Introduction to JavaScript for absolute beginners.', 50, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000002, 'src/assets/videomain_sample.png', NOW()),
(4, 'How to Make a Cup of Tea', 'The perfect guide to making a classic cup of tea.', 25, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000004, 'src/assets/videomain_sample.png', NOW()),
(5, 'How to Fry an Egg', 'Simple steps to frying the perfect egg.', 20, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000004, 'src/assets/videomain_sample.png', NOW()),
(6, 'Excel VLOOKUP Explained', 'Learn how to use VLOOKUP in Excel with examples.', 42, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000003, 'src/assets/videomain_sample.png', NOW()),
(7, 'Excel Pivot Tables', 'Create and customize pivot tables in Excel.', 40, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000003, 'src/assets/videomain_sample.png', NOW()),
(8, 'JavaScript Arrays Explained', 'Understanding arrays in JavaScript.', 33, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000002, 'src/assets/videomain_sample.png', NOW()),
(9, 'SQL JOINs Explained', 'Learn INNER JOIN, LEFT JOIN, and more.', 46, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000001, 'src/assets/videomain_sample.png', NOW()),
(10, 'Advanced Excel Formulas', 'Master advanced formulas like INDEX MATCH.', 39, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000003, 'src/assets/videomain_sample.png', NOW()),
(11, 'JavaScript Functions', 'Introduction to writing functions in JavaScript.', 31, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000002, 'src/assets/videomain_sample.png', NOW()),
(12, 'Database Normalization', 'Understanding normalization and why it matters.', 29, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000001, 'src/assets/videomain_sample.png', NOW()),
(13, 'JavaScript DOM Manipulation', 'Learn how to interact with the DOM in JavaScript.', 34, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000002, 'src/assets/videomain_sample.png', NOW()),
(14, 'Excel Conditional Formatting', 'Make your data pop with conditional formatting.', 28, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000003, 'src/assets/videomain_sample.png', NOW()),
(15, 'SQL Subqueries', 'Learn how to use subqueries effectively.', 27, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000001, 'src/assets/videomain_sample.png', NOW()),
(16, 'JavaScript ES6 Features', 'Introduction to ES6 features like let, const, and arrow functions.', 30, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000002, 'src/assets/videomain_sample.png', NOW()),
(17, 'Excel Macros Basics', 'Automate Excel tasks using macros.', 22, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000003, 'src/assets/videomain_sample.png', NOW()),
(18, 'Database Indexing', 'Improve query performance with indexing.', 26, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000001, 'src/assets/videomain_sample.png', NOW()),
(19, 'JavaScript Async/Await', 'Learn asynchronous programming in JS.', 21, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000002, 'src/assets/videomain_sample.png', NOW()),
(20, 'SQL Transactions', 'Understand transactions and rollback in SQL.', 24, 'https://www.youtube.com/embed/JPzfno4ot-g', 1000001, 'src/assets/videomain_sample.png', NOW());

-- ----------------------------
-- Populate View History
-- ----------------------------
INSERT INTO view_history (user_id, video_id, watch_date) VALUES
(1000000, 1, NOW()), (1000000, 3, NOW()), (1000000, 6, NOW()), (1000000, 8, NOW()), (1000000, 10, NOW()),
(1000001, 2, NOW()), (1000001, 9, NOW()), (1000001, 15, NOW()), (1000001, 18, NOW()), (1000001, 20, NOW()), (1000001, 12, NOW()),
(1000002, 3, NOW()), (1000002, 8, NOW()), (1000002, 11, NOW()), (1000002, 13, NOW()), (1000002, 16, NOW()), (1000002, 19, NOW()), (1000002, 1, NOW()),
(1000003, 6, NOW()), (1000003, 7, NOW()), (1000003, 10, NOW()), (1000003, 14, NOW()), (1000003, 17, NOW()),
(1000004, 4, NOW()), (1000004, 5, NOW()), (1000004, 1, NOW()), (1000004, 7, NOW());

-- ----------------------------
-- Populate Playlists
-- ----------------------------
INSERT INTO playlist (id, playlist_name, user_id, created_at) VALUES
(1, 'SQL Basics', 1000000, NOW()), (2, 'JavaScript Starters', 1000000, NOW()), (3, 'Excel Essentials', 1000000, NOW()),
(4, 'Database Design', 1000001, NOW()), (5, 'Advanced SQL', 1000001, NOW()),
(6, 'JS Basics', 1000002, NOW()), (7, 'Async JS', 1000002, NOW()), (8, 'Front-end Fun', 1000002, NOW()),
(9, 'Excel Power', 1000003, NOW()), (10, 'Data Analysis', 1000003, NOW()),
(11, 'Life Skills', 1000004, NOW()), (12, 'Beginner Tech', 1000004, NOW());

INSERT INTO playlist_video (playlist_id, video_id, created_at) VALUES
(1, 1, NOW()), (1, 9, NOW()), (1, 15, NOW()),
(2, 3, NOW()), (2, 8, NOW()), (2, 11, NOW()),
(3, 6, NOW()), (3, 7, NOW()), (3, 14, NOW()),
(4, 2, NOW()), (4, 12, NOW()), (4, 18, NOW()),
(5, 9, NOW()), (5, 15, NOW()), (5, 20, NOW()),
(6, 3, NOW()), (6, 8, NOW()), (6, 16, NOW()),
(7, 19, NOW()), (7, 16, NOW()),
(8, 13, NOW()), (8, 11, NOW()),
(9, 6, NOW()), (9, 10, NOW()), (9, 17, NOW()),
(10, 7, NOW()), (10, 14, NOW()),
(11, 4, NOW()), (11, 5, NOW()),
(12, 1, NOW()), (12, 3, NOW()), (12, 6, NOW());

-- ----------------------------
-- Populate Video Comments & Comment Threads
-- ----------------------------
INSERT INTO video_comment (id, comment_text, user_id, video_id, num_likes, created_at) VALUES
(1, 'Great explanation!', 1000000, 1, 5, NOW()),
(2, 'Very helpful, thanks!', 1000002, 1, 3, NOW()),
(3, 'I finally understand JOINs now.', 1000003, 9, 4, NOW()),
(4, 'Clear and concise.', 1000004, 3, 2, NOW()),
(5, 'This was so relaxing to watch.', 1000001, 4, 1, NOW()),
(6, 'Perfect egg tutorial.', 1000000, 5, 2, NOW()),
(7, 'VLOOKUP finally makes sense.', 1000002, 6, 3, NOW()),
(8, 'Loved the pivot table tips.', 1000001, 7, 2, NOW()),
(9, 'Async/Await is so much clearer now.', 1000003, 19, 3, NOW());

INSERT INTO comment_thread (id, reply_text, user_id, video_comment_id, num_likes, created_at) VALUES
(1, 'Glad it helped!', 1000001, 1, 1, NOW()),
(2, 'You’re welcome!', 1000001, 2, 1, NOW()),
(3, 'Same here!', 1000004, 3, 0, NOW()),
(4, 'Me too!', 1000000, 3, 0, NOW()),
(5, 'Thanks!', 1000004, 4, 0, NOW());


