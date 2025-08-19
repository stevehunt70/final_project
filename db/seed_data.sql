-- db/seed_data.sql
-- This file contains seed data for the Gota Video Database.
-- It populates the user, video, view history, playlist, playlist_video, video_comment, and comment_thread tables.
-- 

use gota_video_db;
-- ----------------------------
-- Populate Users
-- ----------------------------
SET SQL_SAFE_UPDATES=0;
delete from user;
-- ----------------------------
-- Populate Users (IDs start at 1000000)
-- ----------------------------
INSERT INTO user (id, username, email, password, avatar_url, channel_name, created_on)
VALUES
(1,'Sele Training','training@seletraining.com','Password','Profile.png','Sele Training',NOW()),
(2,'Teachers Tech','teacher@teachertech.com','Password','Profile.png','Teachers Tech',NOW()),
(3,'Victor Chan','victor@chan.com','Password','Profile.png','Victor Chan',NOW()),
(4,'Kevin Stratvert','kev@exceltips.com','Password','Profile.png','Kevin Stratvert',NOW()),
(5,'Simon Smith','simon@simonsez.com','Password','Profile.png','SimonSez',NOW()),
(6,'Sam Brown','info@howtoexcel.co.uk','Password','Profile.png','How to Excel',NOW()),
(7,'Emily Masters','emily@officemaster.com','Password','Profile.png','Office MasterTutorials',NOW()),
(8,'Mo Ali','mo@skillsbuild.co.uk','Password','Profile.png','Skills Build',NOW());

-- ----------------------------
-- Populate Videos
-- ----------------------------
INSERT INTO video (id, title, description, num_likes, url, user_id, thumbnail_url, created_at)
VALUES
(1,'50 Ultimate Excel Tips and Tricks for 2020','The ultimate compilation of Excel tips and tricks to enhance your productivity using Excel.  Updated for 2020!  I''ve combined long-established tips and tricks with new ones Microsoft added in 2019 and 2020. You''ll find solutions to the most common challenges you face in Excel. ',1900562,'https://www.youtube.com/embed/FXs3WG7M-qk',1,'excel_seletraining.png',NOW()),
(2,'10 BestExcel Tips for Beginners','Want to get ahead in Microsoft Excel? This video will show you 10 time-saving tips in Microsoft Excel. These tips will show you some of the most effective ways on how to use Microsoft Excel 2016.',724628,'https://www.youtube.com/embed/ZthlSLYc5UQ',2,'excel_teacherstech.png',NOW()),
(3,'Top 30 Excel Tips and Tricks to save 30+ hours of work','30 Excel tips and tricks covering a wide range of tasks, from inserting data into Excel from screenshots to creating stunning charts, and automating repetitive tasks with VBA.',65889,'https://www.youtube.com/embed/hoUnZVRulLc',3,'excel_victorchan.png',NOW()),
(4,'Top 20 Microsoft Excel Tips & Tricks','In this step-by-step tutorial, learn the top 20 best Microsoft Excel tips and tricks.',843241,'https://www.youtube.com/embedAOPa7ORJj4Y',4,'excel_kevinStratvert.png',NOW()),
(5,'30 Essential Excel Tips and Tricks - Excel Productivity Tutorial','We''ve combined 30 of our recent popular Excel training tutorials and created a single video.',96451,'https://www.youtube.com/embed/JPzfno4ot-g&t',5,'excel_simonsez.png',NOW()),
(6,'Top 30 Advanced Excel Tips and Tricks','Master 30 advanced Excel skills to become a pro!',1076440,'https://www.youtube.com/embed/Hj4PVFYhqhQ',6,'excel_howtoexcel.png',NOW()),
(7,'Top 15 Microsoft Word Tips & Tricks','In this step-by-step tutorial, learn the top 15 best Microsoft Word tips and tricks.',1273657,'https://www.youtube.com/embed/LxgheItBIzQ',4,'word_kevinstratvert.png',NOW()),
(8,'40 Ultimate Word Tips and Tricks','The ultimate compilation of Word tips and tricks to enhance your skills using Microsoft Word.',301618,'https://www.youtube.com/embed/Q_AaL6ljudU',1,'word_seletraining.png',NOW()),
(9,'Top 21 Microsoft Word Tips & Tricks','Today we will show you 21 useful tips and tricks for Microsoft Word. ',48271,'https://www.youtube.com/embed/63Jz_VisRV0',7,'word_officemaster.png',NOW()),
(10,'30 Awesome Microsoft Word Tips and Tricks','In this Microsoft Word step-by-step tutorial, discover 30 Awesome Tips and Tricks that will make you look like a pro!',12813,'https://www.youtube.com/embed/H9F7hB5ODYM',8,'word_skillsbuild.png',NOW()),
(11,'5 Tips and Tricks to Master Microsoft Word','Looking to master Microsoft Word? Check out these 5 tips and tricks to improve your skills in this essential program. From formatting to zooming to shortcuts, we''ve got you covered!',10000,'https://www.youtube.com/embed/_DVcxzQOfMs',2,'word_teacherstech.png',NOW()),
(12,'PowerPoint Tips and Tricks','In this step-by-step tutorial, learn the top 15 best Microsoft PowerPoint tips and tricks.',1001244,'https://www.youtube.com/embed/zcITARGg3CQ',4,'pp_kevinstratvert.png',NOW()),
(13,'30 Ultimate PowerPoint Tips and Tricks','The ultimate compilation of PowerPoint tips and tricks to enhance your skills using Microsoft PowerPoint.',1239210,'https://www.youtube.com/embed/0GW4vT7d3nc',1,'pp_seletraining.png',NOW()),
(14,'Top 20 PowerPoint Tips','Here is the top 20 tips and tricks for PowerPoint.',922302,'https://www.youtube.com/embed/DI5LNVts9nc',8,'pp_skillsbuild.png',NOW()),
(15,'13 PowerPoint Tips and Tricks','Polish your presentation skills or leverage new tools in PowerPoint from our popular tips this year.',8301,'https://www.youtube.com/embed/nP-OWuFY9hI',5,'pp_simonsez.png',NOW()),
(16,'Advanced PowerPoint Hacks','Learn practical PowerPoint tips to elevate your presentations.',136917,'https://www.youtube.com/embed/X1sLCkCB-Ts',5,'pp_simonsez2.png',NOW());

-- ----------------------------
-- Populate View History
-- ----------------------------
-- INSERT INTO view_history (user_id, video_id, watch_date) VALUES
-- (1, 1, NOW()), (1, 3, NOW()), (1, 6, NOW()), (1, 8, NOW()), (1, 10, NOW()),
-- (2, 2, NOW()), (2, 9, NOW()), (2, 15, NOW()), (2, 18, NOW()), (2, 20, NOW()), (2, 12, NOW()),
-- (3, 3, NOW()), (3, 8, NOW()), (3, 11, NOW()), (3, 13, NOW()), (3, 16, NOW()), (3, 19, NOW()), (3, 1, NOW()),
-- (4, 6, NOW()), (4, 7, NOW()), (4, 10, NOW()), (4, 14, NOW()), (4, 17, NOW()),
-- (5, 4, NOW()), (5, 5, NOW()), (5, 1, NOW()), (5, 7, NOW());

-- ----------------------------
-- Populate Playlists
-- ----------------------------
INSERT INTO playlist (id, playlist_name, user_id, created_at) VALUES
(1, 'SQL Basics', 1, NOW()), (2, 'JavaScript Starters', 1, NOW()), (3, 'Excel Essentials', 2, NOW()),
(4, 'Database Design', 2, NOW()), (5, 'Advanced SQL', 2, NOW()),
(6, 'JS Basics', 3, NOW()), (7, 'Async JS', 2, NOW()), (8, 'Front-end Fun', 1, NOW()),
(9, 'Excel Power', 4, NOW()), (10, 'Data Analysis', 3, NOW()),
(11, 'Life Skills', 5, NOW()), (12, 'Beginner Tech', 4, NOW());

-- INSERT INTO playlist_video (playlist_id, video_id, created_at) VALUES
-- (1, 1, NOW()), (1, 9, NOW()), (1, 15, NOW()),
-- (2, 3, NOW()), (2, 8, NOW()), (2, 11, NOW()),
-- (3, 6, NOW()), (3, 7, NOW()), (3, 14, NOW()),
-- (4, 2, NOW()), (4, 12, NOW()), (4, 11, NOW()),
-- (5, 9, NOW()), (5, 15, NOW()), (5, 2, NOW()),
-- (6, 3, NOW()), (6, 8, NOW()), (6, 3, NOW()),
-- (7, 12, NOW()), (7, 12, NOW()),
-- (8, 13, NOW()), (8, 11, NOW()),
-- (9, 6, NOW()), (9, 10, NOW()), (9, 3, NOW()),
-- (10, 7, NOW()), (10, 14, NOW()),
-- (11, 4, NOW()), (11, 5, NOW()),
-- (12, 1, NOW()), (12, 3, NOW()), (12, 6, NOW());

-- ----------------------------
-- Populate Video Comments & Comment Threads
-- ----------------------------
-- 👌👌🙌👍😎
INSERT INTO video_comment (id, comment_text, user_id, video_id, num_likes, created_at) VALUES
(1,'Easy to understand and practice. Thank you so much for the video 👌',5,16,3,NOW()),
(2,'Hey madam I''m from Kenya🇰🇪 and I''ve really loved your lesson so much so much you have basically provided solution to all of my problems you''ve taught me everything that my teacher failed to do so right now I''m even the top notch in our class may you be blessed a lot madam receive a lot of love from Kenya once again I recommend everyone to watch this channel basically because it provides everything I mean everything thank you very much',5,16,5,NOW()),
(3,'Thank you for your time and effort. Great training video. Your explanations are super clear and easy to follow',5,16,7,NOW()),
(4,'I work on ''scrolling'' in my community that shares lunch each day. We use the scrollings to inform about events coming up. I have learned some very helpful things working through your hacks.Thank you.',5,16,7,NOW()),
(5,'Thanks for letting us know what version you''re using for the tutorial.',5,16,2,NOW()),
(6,'It''s a good video. I''m a master''s design student and still use Microsoft PowerPoint for my design studies in addition to Canva and Figma',5,15,10,NOW()),
(7,'This is great. Lots of PP Youtube videos are hard to follow because the presenter speaks too fast or has a heavy accent. Sele is clear and easy to follow. Great voice, too!',8,14,3,NOW()),
(8,'Thank you! you are the best in selecting useful things with the best explanation',8,14,2,NOW()),
(9,'i have been using power point for a long time and i dont think i could have ever learned this things without your help',8,14,1,NOW()),
(10,'Really like the ''ungroup smartArt'' one! Thx for sharing!',8,14,2,NOW()),
(11,'Wow... I have my task cutout for me now... my 200 slide presentation for 4 day workshop needs a lot of upgrade based on this new knowledge. THANKS',8,14,1,NOW()),
(12,'Thank you for going at a slow pace and talking through each step. I will definitely watch it again.',1,13,3,NOW()),
(13,'I am from India. I am a Town Planner. I never knew these tricks exists in PowerPoint.',1,13,2,NOW()),
(14,'Outstanding! Applying what I learned, I was able to create a custom slide for our company’s Marketing department. We are in the agricultural industry and our logo includes an oak tree. I inserted an image of an acorn on the slide and used the animation path to show a drop of water dripping on the acorn. The solid acorn then splits using morph. Finally, the oak tree grows from the split acorn (swipe animation) and ultimately morphs into the oak tree logo. It look only minutes to create! Thank you for sharing your knowledge! Endless possibilities await!!',1,13,23,NOW()),
(15,'Tip based upon my experience: After you preform the advance Morph (changing Large Cirle & Square names to !!Morph), the first transition from small circle to big circle will no longer work. You will need to change the name of the small circle to the same as the big circle i.e. now named ''!!Morph''. This should now work again. BTW I really love your videos and have found them excellent, especially as I now work from home due to COVID. Keep up the great work and best of luck in this new venture! Greetings from Ireland :)',4,12,52,NOW()),
(16,'It''s amazing how I thought I was already pretty much familiar with Microsoft apps but prove myself lacking everytime I watch Kevin''s videos. But of course, it''s only an effective tutorial because his contents are well put together. You are awesome, Kevin. Please keep it up!',4,12,117,NOW()),
(17,'Morph hands down has been my favorite feature. It has saved me so much time when trying to create complex animations without adding a bunch of animations. These are awesome tips. Great stuff Kevin! :)',4,12,77,NOW()),
(18,'It''s been a while since I''ve jumped for the subscribe button, thank you! You get straight to the point, there''s no random waffling and your instructions are clear.',4,12,22,NOW()),
(19,'I just wanted to drop a huge thank you for your invaluable help with PowerPoint tips and tricks! Your insights and guidance made a world of difference in my presentation, and I genuinely appreciate you taking the time to share your expertise. Your support not only improved my skills but also boosted my confidence in using PowerPoint effectively. I''m so grateful for your generosity and willingness to share your knowledge. Thanks again for being such a fantastic resource!',4,12,2,NOW()),
(20,'Thank you very much',2,11,0,NOW()),
(21,'wow that was so useful, cheers',2,11,4,NOW()),
(22,'Excellent. Great tips, especially that last one, this will be very useful for me. Thank you for sharing as always.',2,11,1,NOW()),
(23,'Thanks Sir',8,10,1,NOW()),
(24,'Justification of paragraph is not ctrl+i but ctrl+J',8,10,2,NOW()),
(25,'Those are not tips and tricks',8,10,0,NOW()),
(26,'dear ms word ki hidden shortcut keys chahiye jo aapko youtube google pe nahi milny wali hidden shortcut keys aapko koi nahi bata payega to fatta fatt email send karo me bhejta hun aapka kaam assan karny ke liye',8,10,0,NOW()),
(27,'Very Helpful tutorial. Go ahead and share more helpful tricks.',7,9,1,NOW()),
(28,'Brilliant. Not all was new but alot of new things to play with',7,9,0,NOW()),
(29,'So usefull',7,9,1,NOW()),
(30,'It''s very helpful',7,9,0,NOW()),
(31,'Wow',7,9,0,NOW()),
(32,'Powerful tips',7,9,0,NOW()),
(33,'Thx',7,9,0,NOW()),
(34,'Good Teaching Method',7,9,0,NOW()),
(35,'You are the best web based teacher I have come across',1,8,3,NOW()),
(36,'this is possibly the best word tutorial I’ve ever seen. I really love it. I thank you',1,8,3,NOW()),
(37,'I really appreciate your training style and especially your tempo. Thank you so much.',1,8,13,NOW()),
(38,'I have been using Word since 1986, and I''ve learned a ton of new things that could have saved me a lot of time. Thank you!',1,8,2,NOW()),
(39,'Still loving your calm, steady, thorough and crystal clear teaching. And just in case that sentence isn’t expressive enough, let me just interject one more descriptive... superlative! Thank you so very much!',1,8,9,NOW()),
(40,'You are a great teacher. Very easy to follow and thanks for separating each chapter 👍',1,8,5,NOW()),
(41,'I have learned more from your tutorials than I ever learned going to some overpriced classes at a "learning center". Thank you so much for your clear concise instructions!',4,7,100,NOW()),
(42,'He literally told all the doubts that were arising in my brain whenever he was telling any point Seriously he is a man from the future Subscribed...',4,7,16,NOW()),
(43,'I''m ecstatic after watching this video after multiple tries of converting a PDF document and then nearly considering buying a subscription from Adobe for PDF to word conversion! Thanks a bunch!!',4,7,49,NOW()),
(44,'This video covered literally everything I needed to learn to undertake a very large document for the first time- thanks a million.',4,7,8,NOW()),
(45,'Definitely going to be switching to dark mode for the future because it seriously is overwhelming on my eyes when it’s super bright with the white background. Thanks for that advice Kevin! :)',4,7,99,NOW()),
(46,'Thank you Kevin for this excellent presentation. This is the best ever video I ever watched on MS Word. God bless you.',4,7,8,NOW()),
(47,'One of the BEST instructive series of videos on YouTube!!!',4,7,5,NOW()),
(48,'This is fantastic. I''ve been using Word for such a long time and learned so much',4,7,12,NOW()),
(49,'@Kevin, I loved this review, but it would be great if there were 2 enhancements: 1. When you introduce tips, please tell us what versions this tip is available in. Some of your Top 15 were available a few years ago. 2. When you chose APA (I wish they had an entire template for dissertations!) you accidentally chose MLA for specifics. In APA the references page is called References. In MLA it''s called Works Cited - and these are different.',4,7,15,NOW()),
(50,'If you are setting up a shell or template and want to add placeholder content into the document, you can use the =lorem function which will add generic text into the document. You format it as =lorem(# of paragraphs, # of sentences) As such =lorem(2, 5) will give us two paragraphs of fake text that have 5 sentences each. Please beware that sentences won''t make sense to people, but they will provide placeholder text. Additionally, you can use the =rand function, which uses the same format as lorem, but actually adds random tutorial text as a placeholder.',4,7,24,NOW()),
(51,'Have watched at minimum 20 Excel videos and this one is by far the best! Thank you',6,6,2,NOW()),
(52,'Wow! I spent half the night watching your channel. Highly recommend that even advanced users watch your tutorials. I''ve been using Excel for 25 years and love it. I knew many of your tips already but it was so worth watching anyway. The new functions I learnt will save me many hours.',6,6,6,NOW()),
(53,'amazing job. please put excel file in the description video',5,5,3,NOW()),
(54,'Hello Thanks for the good work. Kindly share with us the Excel worksheet used in the video to enable us to practise and follow the video. Thank you so much',5,5,2,NOW()),
(55,'Very Good Tutorial. However, you should have included the working files',5,5,0,NOW()),
(56,'Thanks for the good work.',5,5,0,NOW()),
(57,'Good. given the excel file',5,5,0,NOW()),
(58,'A lot of what you shared I didn''t know. As a school teacher, this is one of the most powerful tools to use when playing with data to accomplish a task, not only easily but quickly too. Thank you, Kevin, for the effort. Prepare another one showing more tips.',4,4,66,NOW()),
(59,'Simply excellent, Kevin! I''ve worked with Excel for a bunch of years and thought I knew "everything" about it! But some of your tips were new for me and extremely practical in daily use! So thanks a lot !!',4,4,11,NOW()),
(60,'The xlookup is new to me. Definitely going to use that more.',4,4,4,NOW()),
(61,'learned a lot and really amazing tutorial i''ve ever seen.',3,3,1,NOW()),
(62,'A perfect tutorial with great choice of tipps, presented in a great layout! Thanks a ton!',3,3,2,NOW()),
(63,'Thank you so much, Really learned alot. You actually A great Teacher, the Explanations are perfect',3,3,3,NOW()),
(64,'Stumbled on this video while looking for something else -- and, half way in, this is the neatest 20 minutes I''ve spent on line in a while',3,3,1,NOW()),
(65,'You''re My Real Master',3,3,1,NOW()),
(66,'Great, thank you very much',3,3,1,NOW()),
(67,'Thank you so much!! I''m a Beginner.....and when I say Beginner...I mean I''m like an alien who just stepped foot onto Planet Earth!!! I''m pretty new to all things Microsoft but work in the Front Office of a middle school and now that we''re quarantined because of Covid-19 😒, I am determined to be at my job and stretch myself. I''m really understanding the tutorials and no longer feel like an alien... more like Big Foot with some knowledge of how the (computer) world looks and works!! Thanks again and I''ll continue to better myself and apply all I''ve learned!',2,2,64,NOW()),
(68,'Permit me to say I find your voice calm, soothing, and informative without the least bit of arrogance detected. Maybe it is because I am 59 years of age and familiar with the degree of professionalism displayed from all of my years of employment back home in NYC, but I must commend you not for these useful tips alone but the manner in which they are presented, clear, precise and encompassed by a voice that makes the lessons easy to comprehend and far less intimidating than other turorials. Thank you...',1,1,176,NOW()),
(69,'THE BEST EXCEL GUIDE I''VE COME ACROSS SO FAR 👍 THANK YOU!',1,1,6,NOW()),
(70,'All Excel training videos should be like this!  So clear, concise and easy to understand.  Thanks for helping me step up my Excel knowledge to a new level.',1,1,26,NOW());




INSERT INTO comment_thread (id, reply_text, user_id, video_comment_id, num_likes, created_at) VALUES
(1, 'Glad it helped!', 1, 1, 1, NOW()),
(2, 'You’re welcome!', 2, 2, 1, NOW()),
(3, 'Same here!', 3, 3, 0, NOW()),
(4, 'Me too!', 4, 3, 0, NOW()),
(5, 'Thanks!', 5, 4, 0, NOW());

SET SQL_SAFE_UPDATES = 1;
