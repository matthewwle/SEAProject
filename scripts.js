/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */



// This is the preloaded dataset on the website
let titles = [
    { title: "Minding the Gap", imageUrl: "https://resizing.flixster.com/HXK6vSoNFiYb40Jt7z-xZClnZDw=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15082710_p_v8_ac.jpg", date: 2018, score: 100, synopsis: "Three young men bond together to escape volatile families in their Rust Belt hometown. As they face adult responsibilities, unexpected revelations threaten their decade-long friendship."},
{ title: "Free Chol Soo Lee", imageUrl: "https://resizing.flixster.com/Zz6Nqcykg9LvT9mWkqRe3mONGa8=/fit-in/180x240/v2/https://resizing.flixster.com/9AW4Eaq4FJBXKKuct13kg6Vty70=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg4MmE5ZmYzLWU4NzMtNGI2Yi1hYWNjLWI1MjNlYjU3NzU4MS5wbmc=", date: 2022, score: 100, synopsis: "In 1970s San Francisco, 20-year-old Korean immigrant Chol Soo Lee is racially profiled and convicted of a Chinatown gang murder. After spending years fighting to survive, investigative journalist K.W. Lee takes a special interest in his case, igniting an unprecedented social justice movement."},
{ title: "Driveways", imageUrl: "https://resizing.flixster.com/wEKaizawa1U87a1kc5aGZpn3VzM=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17129977_p_v8_aa.jpg", date: 2019, score: 99, synopsis: "A lonely boy goes with his mother to help clean out his late aunt's house."},
{ title: "Shirkers", imageUrl: "https://resizing.flixster.com/sYDf6JV3b2jzy7V7XHFPUsQ_dFg=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15082638_p_v8_aa.jpg", date: 2018, score: 99, synopsis: "In 1992 teenager Sandi Tan shoots Singapore's first road movie with her enigmatic American mentor, Georges, who then absconded with all of the footage. The 16 mm film is recovered 20 years later, sending Tan, who is now a novelist living in Los Angeles, on a personal odyssey in search of Georges' footprints."},
{ title: "Minari", imageUrl: "https://resizing.flixster.com/iWm-JRMETfu1mBbh9mRGo-54J5I=/fit-in/180x240/v2/https://resizing.flixster.com/E18FO2BbJxaQTHe4xb6lIt59Apo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MxZGFjOGZmLWRiMDEtNDdkMi04OTA5LTk3YTU4YmVkZDE0MS5qcGc=", date: 2020, score: 98,synopsis: "A tender and sweeping story about what roots us, Minari follows a Korean-American family that moves to a tiny Arkansas farm in search of their own American Dream. The family home changes completely with the arrival of their sly, foul-mouthed, but incredibly loving grandmother. Amidst the instability and challenges of this new life in the rugged Ozarks, Minari shows the undeniable resilience of family and what really makes a home."},
{ title: "The Big Sick", imageUrl: "https://resizing.flixster.com/4JnVSHyqHCyFrVyaiD8XUYEtzNc=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/171221/171221_aa.jpg", date: 2017, score: 98, synopsis: "Kumail is a Pakistani comic, who meets an American graduate student named Emily at one of his stand-up shows. As their relationship blossoms, he soon becomes worried about what his traditional Muslim parents will think of her. When Emily suddenly comes down with an illness that leaves her in a coma, Kumail finds himself developing a bond with her deeply concerned mother and father."},
{ title: "The Paper Tigers", imageUrl: "https://resizing.flixster.com/ORhOgQwzNr3NBcUWl5l_dnobvO4=/fit-in/180x240/v2/https://resizing.flixster.com/JSdXMZxo0MKRgE2ftO6gYgsG9io=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyNjMzZTIxLTY2ZjgtNDVkOC1iYTEwLWUyNzhlODZjZDlmYy5qcGc=", date: 2020, score: 98, synopsis: "Three martial artists--notorious in their prime as the \"three tigers\"-- have grown into middle-aged men one kick from a pulled muscle. But after their teacher's murder, they must juggle dead-end jobs, dad duties, and old grudges to avenge him."},
{ title: "The Farewell", imageUrl: "https://resizing.flixster.com/6_prBxeFHCGfyg9yKvuTfYixtOA=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/197251/197251_aa.jpg", date: 2019, score: 97, synopsis: "Billi's family returns to China under the guise of a fake wedding to stealthily say goodbye to their beloved matriarch -- the only person that doesn't know she only has a few weeks to live."},
{ title: "The Half of It", imageUrl: "https://resizing.flixster.com/BXqFeacG8eT8QgG5YYCX-gngEjM=/fit-in/180x240/v2/https://resizing.flixster.com/KrAMOe-0jT_thv_O9YOyO-bPzPI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M2MjQzNWU5LTRmOGYtNDJkZS1hNWMxLTU2ZGFhN2M4MmNhZi53ZWJw", date: 2020, score: 97, synopsis: "A shy, introverted student helps the school jock woo a girl whom, secretly, they both want."},
{ title: "Columbus", imageUrl: "https://resizing.flixster.com/2UehYk_YfDRuQQFArHONvoCICtg=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14133357_p_v8_aa.jpg", date: 2017, score: 96, synopsis: "When a renowned architecture scholar falls suddenly ill during a speaking tour, his son Jin finds himself stranded in Columbus, Ind., a small Midwestern city celebrated for its many significant modernist buildings. Jin strikes up a friendship with Casey, a young architecture enthusiast who works at the local library. As their intimacy develops, Jin and Casey explore both the town and their own conflicted emotions."},
{ title: "To All the Boys I've Loved Before", imageUrl: "https://resizing.flixster.com/vwWxWivZUEu3KpAlqXdOgAZy06g=/fit-in/180x240/v2/https://resizing.flixster.com/6EdCRefP8am-X9ySfQh-hpfar1w=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E1Nzg4ZTJhLWJmNWItNGI0My1iMDY4LTFiYTI3NTU4YTlhZS53ZWJw", date: 2018, score: 96, synopsis: "A teenage girl's love letters are exposed and wreak havoc on her life."},
{ title: "Lucky Grandma", imageUrl: "https://resizing.flixster.com/EQbB7T-76l1abQK_mMWid83sqcM=/fit-in/180x240/v2/https://resizing.flixster.com/J8mz37FYe_oG5eCM8a1RF--URd0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y2NDZiMjQwLTRhMjEtNDliYi1hOWNiLThkNjRjMTc0OGIyMC53ZWJw", date: 2019, score: 96, synopsis: "In New York City's Chinatown, a Chinese grandma goes all in at the casino, landing herself on the wrong side of luck."},
{ title: "Chan Is Missing", imageUrl: "https://resizing.flixster.com/AdHvDKAr6zmvPLjAf8P7grW5U8Q=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p39969_p_v8_aa.jpg", date: 1982, score: 96, synopsis: "In this understated comedy from director Wayne Wang, Jo (Wood Moy), a cab driver in San Francisco's Chinatown, and his nephew, Steve (Marc Hayashi), have placed their combined savings into the hands of the shady and mysterious Chan. When this unreliable holder of their funds disappears, Jo and Steve become amateur investigators and attempt to track him down, meeting with resistance -- and plenty of humorous characters and situations -- along the way."},
{ title: "Turning Red", imageUrl: "https://resizing.flixster.com/1ZSXDL1i3nlIGFGuMpZTDFYVAmE=/fit-in/180x240/v2/https://resizing.flixster.com/gT6NcfmUJNbiOz3gPUByxps_FcM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM0YWFlNzMzLWViMDAtNDAyZi1iY2RmLWMzNzkxNzUzMzA0Yi5qcGc=", date: 2022, score: 95, synopsis: "In \"Turning Red\", Mei Lee is a confident, dorky thirteen-year-old torn between staying her mother's dutiful daughter and the chaos of adolescence. And as if changes to her interests, relationships, and body weren't enough, whenever she gets too excited (which for a teenager is practically ALWAYS), she \"poofs\" into a giant red panda!"},
{ title: "Everything Everywhere All at Once", imageUrl: "https://resizing.flixster.com/YEtJo5X13brZTogcU54WYk-lEbI=/fit-in/180x240/v2/https://resizing.flixster.com/mx-agGjjsUK1QMyuv3AJhHI3hgo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA3ZjU2MGU1LWMxODItNDlkMC1hYzJhLTY2YzMwOGZkMDhiZi5qcGc=", date: 2022, score: 94, synopsis: "Directed by Daniel Kwan and Daniel Scheinert, collectively known as Daniels, the film is a hilarious and big-hearted sci-fi action adventure about an exhausted Chinese American woman (Michelle Yeoh) who can't seem to finish her taxes."},
{ title: "Fire Island", imageUrl: "https://resizing.flixster.com/-q_AvpHPnbetUqdnE-mQkjetFXE=/fit-in/180x240/v2/https://resizing.flixster.com/9jcRlFLwamMB0GUke_OCjw8vK94=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNkZThkOTc3LTZhNTItNGFiNy04NjQyLTVkY2FjN2QxNTkwNy5qcGc=", date: 2022, score: 94, synopsis: "Set in the iconic Pines, Andrew Ahn's \"Fire Island\" is an unapologetic, modern-day rom-com showcasing a diverse, multicultural examination of queerness and romance. Inspired by the timeless pursuits from Jane Austen's classic \"Pride and Prejudice,\" the story centers on two best friends (Joel Kim Booster and Bowen Yang) who set out to have a legendary summer adventure with the help of cheap rosé and their cadre of eclectic friends."},
{ title: "Gook", imageUrl: "https://resizing.flixster.com/b-zSc6lWHDJ2JU7kGiK6dOKrJbU=/fit-in/180x240/v2/https://resizing.flixster.com/TYaWJVsAOJdj2dDwO1gBc5G9VPM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MwMDUxZWYyLTg1YWYtNGU1Yy1hMmNmLWU0YWFlNWI3ZWZhOS53ZWJw", date: 2017, score: 94, synopsis: "Eli and Daniel, two Korean American brothers who own a struggling women's shoe store, have an unlikely friendship with 11-year-old Kamilla. On the first day of the 1992 L.A. riots, the trio must defend the store while contemplating the meaning of family and thinking about personal dreams and the future."},
{ title: "Abacus: Small Enough to Jail", imageUrl: "https://resizing.flixster.com/rBq1eau4t5fUm-2PWFDxXqKhjJg=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/171950/171950_aa.jpg", date: 2016, score: 93, synopsis: "Abacus, a small family-run bank, becomes the only U.S. bank to face criminal charges in the wake of the 2008 financial crisis. The indictment and subsequent trial forces the Sung family to defend itself -- and its bank's legacy in the Chinatown community -- over the course of a five-year legal battle."},
{ title: "Be Water", imageUrl: "https://resizing.flixster.com/INNVfoP_w_Q3OEAuoLM5eTgLG3k=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19263910_p_v8_aa.jpg", date: 2020, score: 93, synopsis: "Martial arts legend Bruce Lee contends with racism as he tries to land leading roles in Hollywood."},
{ title: "Searching", imageUrl: "https://resizing.flixster.com/_vV5rctqX24gaf6bFKhNnSm-jkg=/fit-in/180x240/v2/https://resizing.flixster.com/Tn0kINMYZaceU06DjGh5vCsEjYg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I0YzcxZDBjLWMxYTEtNDNkNy1hZWVjLWU2ODc1NjNiODdmOC5qcGc=", date: 2018, score: 92, synopsis: "David Kim becomes desperate when his 16-year-old daughter Margot disappears and an immediate police investigation leads nowhere. He soon decides to search the one place that no one else has -- Margot's laptop. Hoping to trace her digital footprints, David contacts her friends and looks at photos and videos for any possible clues to her whereabouts."},
{ title: "Mississippi Masala", imageUrl: "https://resizing.flixster.com/UxH9fQk2KXz6AzQmolwFhjkATvw=/fit-in/180x240/v2/https://resizing.flixster.com/OpNcalVJkMClkm4i1OS5boPyy1c=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNhNzY0ZGQ4LTcxMzItNDhkYS04YTNhLTNkOTVjNjcyNGQxMy5qcGc=", date: 1991, score: 92, synopsis: "The vibrant cultures of India, Uganda, and the American South are blended and simmered into a rich and fragrant fusion feast in Mira Nair's luminous look at the complexities of love in the modern melting pot. Years after her Indian family was forced to flee their home in Uganda by the dictatorship of Idi Amin, twentysomething Mina (Sarita Choudhury) finds herself helping to run a motel in the faraway land of Mississippi."},
{ title: "Shang-Chi and the Legend of the Ten Rings", imageUrl: "https://resizing.flixster.com/fcVnofjxajGj4-qsrW07MTWJwog=/fit-in/180x240/v2/https://resizing.flixster.com/bZGWzjLoyj0GXIQj8vs-8y0xMIA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY0NWJhN2RhLTg1Y2YtNDBmYS04YjQ0LWI5MWY4NmIwOGRjMy5qcGc=", date: 2021, score: 91, synopsis: "Marvel Studios' \"Shang-Chi and The Legend of The Ten Rings\" stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng."},
{ title: "Crazy Rich Asians", imageUrl: "https://resizing.flixster.com/SvNQ5vOpGQ1KlG39syy1jZWlwoI=/fit-in/180x240/v2/https://resizing.flixster.com/VZsEydVSIF7G1hUPkN8ytnh_tlo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y3NjA2YjlmLTQ2MzUtNGQwYS05MWQyLTAxOWM3NjExZTdmNS5qcGc=", date: 2018, score: 91, synopsis: "Rachel Chu is happy to accompany her longtime boyfriend, Nick, to his best friend's wedding in Singapore. She's also surprised to learn that Nick's family is extremely wealthy and he's considered one of the country's most eligible bachelors. Thrust into the spotlight, Rachel must now contend with jealous socialites, quirky relatives and something far, far worse -- Nick's disapproving mother."},
{ title: "Joy Ride", imageUrl: "https://resizing.flixster.com/gFG4gjB_2fsAJSL_79nNxaCGIJs=/fit-in/180x240/v2/https://resizing.flixster.com/n6sJB50HodR6Esm-282lkAY0G0Q=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQzYjUzNDUzLWE1MmEtNDVmOC05ZDM2LTUyYmJmYzZmY2NkYS5qcGc=", date: 2023, score: 90, synopsis: "The hilarious and unapologetically explicit story of identity and self-discovery centers on four unlikely friends who embark on a once-in-a-lifetime international adventure. When Audrey's (Ashley Park) business trip to Asia goes sideways, she enlists the aid of Lolo (Sherry Cola), her irreverent, childhood best friend who also happens to be a hot mess; Kat (Stephanie Hsu), her college friend turned Chinese soap star; and Deadeye (Sabrina Wu), Lolo's eccentric cousin. Their no-holds-barred, epic experience becomes a journey of bonding, friendship, belonging, and wild debauchery that reveals the universal truth of what it means to know and love who you are."},
{ title: "To Be Takei", imageUrl: "https://resizing.flixster.com/za0BSpc3V0gIUxN3Y2Vly1Te5nM=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10493570_p_v12_ab.jpg", date: 2014, score: 90, synopsis: "Together with his husband Brad, actor-activist George Takei parlays his remarkable acting career and wicked sense of humor into a new role as beloved pop-culture icon and Internet phenomenon."},
{ title: "After Yang", imageUrl: "https://resizing.flixster.com/IXCtLM1YGfG0AzWkevFwCCmstIE=/fit-in/180x240/v2/https://resizing.flixster.com/Iz2e43lQ3ZcFXQgxxYpRqzoDtTY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q4ZDY5OGEzLTcyM2EtNDYwOS1hZWQ0LTBjMDBjYTQwODI4MS5qcGc=", date: 2021, score: 90, synopsis: "When his young daughter's beloved companion -- an android named Yang -- malfunctions, Jake (Colin Farrell) searches for a way to repair him. In the process, Jake discovers the life that has been passing in front of him, reconnecting with his wife (Jodie Turner-Smith) and daughter across a distance he didn't know was there."},
{ title: "Always Be My Maybe", imageUrl: "https://resizing.flixster.com/rUiXC9dN6Ucm_twmkECD8dCegLA=/fit-in/180x240/v2/https://resizing.flixster.com/pyASi778pVDTiFaxwVtMJOuS7GU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA4ZmUyMDQyLTM1YzEtNDJjNC1iMTk2LTdmMjQ5NDUyMTkxNy53ZWJw", date: 2019, score: 89, synopsis: "Childhood sweethearts have a falling out and don't speak for 15 years. They reconnect as adults when Sasha runs into Marcus in San Francisco. Although the old sparks are still there, the couple live in different worlds."},
{ title: "The Karate Kid", imageUrl: "https://resizing.flixster.com/aQmnJziS_Bz_uJP4Np62ShcBeAY=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6526_p_v8_ab.jpg", date: 1984, score: 89, synopsis: "Daniel (Ralph Macchio) moves to Southern California with his mother, Lucille (Randee Heller), but quickly finds himself the target of a group of bullies who study karate at the Cobra Kai dojo. Fortunately, Daniel befriends Mr. Miyagi (Noriyuki \"Pat\" Morita), an unassuming repairman who just happens to be a martial arts master himself. Miyagi takes Daniel under his wing, training him in a more compassionate form of karate and preparing him to compete against the brutal Cobra Kai."},
{ title: "Thousand Pieces of Gold", imageUrl: "https://resizing.flixster.com/hCtyFRFv4hBsQguTyQWSUQsTmh0=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12297_p_v8_am.jpg", date: 1990, score: 88, synopsis: "Set in the 1880s, this film chronicles the journey of Lalu (Rosalind Chao), a Chinese woman whose financially desperate family sells her as a bride. She is sent to the United States, where she is bought by sleazy barkeep Hong King (Michael Paul Chan), who plans to make money off of Lalu by forcing her into a life of prostitution. Unwilling to submit to his demands, she begins her own successful business venture and captures the attention of the troubled but kindly Charlie (Chris Cooper)."},
{ title: "Meet the Patels", imageUrl: "https://resizing.flixster.com/gHhOMJub3Mzp-GCKMXC4eRBo8ME=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11122787_p_v13_ab.jpg", date: 2014, score: 87, synopsis: "Filmmaker Geeta V. Patel follows her brother, Indian-American actor Ravi V. Patel, as he embarks on a quest to find a wife and make his family happy."},
{ title: "Yellow Rose", imageUrl: "https://resizing.flixster.com/vKMU6hFduveE7Szsloj6LGKX7J4=/fit-in/180x240/v2/https://resizing.flixster.com/jN4dEOFBvqlL5WhnSXkeacNcBsQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE4ZWVlNzkxLWJkNDItNDVjZC04ZjNiLWIwNzQyYjMyNWNjMS53ZWJw", date: 2019, score: 87, synopsis: "A Filipina teen must decide whether to stay with her family or leave her small Texas town to become a country music singer."},
{ title: "Ms. Purple", imageUrl: "https://resizing.flixster.com/OJzoYZPH0grSMJ3JGOvtXD4oIoU=/fit-in/180x240/v2/https://resizing.flixster.com/SVK_jmNr2n8J4gIOi_PnF8LUpZg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzllOTY1YTI1LTVkY2QtNDg4Ni04ZDUzLTEyMjYwMzczYzQ4Mi53ZWJw", date: 2019, score: 87, synopsis: "A karaoke hostess reconnects with her estranged brother, forcing them to enter a period of intense self-reflection as their single father who raised them nears death."},
{ title: "Saving Face", imageUrl: "https://resizing.flixster.com/zzME48c4wyICE3Llh1kzOgSv2ec=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p88291_p_v11_af.jpg", date: 2004, score: 88, synopsis: "Wil (Michelle Krusiec) is a lesbian, but she not dare tell her widowed mother, Hwei-lan (Joan Chen), or her very traditional grandparents. She's shocked, however, to find out she's not the only one in her family with romantic secrets when she learns that her 48-year-old mother is pregnant. Unwilling to reveal who the father is, Hwei-lan is kicked out of her parents' home and must move in with Wil, which puts a strain on Wil's budding relationship with openly gay Vivian (Lynn Chen)."},
{ title: "The Joy Luck Club", imageUrl: "https://resizing.flixster.com/zZOdwrukB6qI0hcUhyN1ElRH_4g=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14995_p_v8_ai.jpg", date: 1993, score: 86, synopsis: "In San Francisco, a group of aging Chinese women (Kiều Chinh, Tsai Chin, France Nuyen, Lisa Lu) meet regularly to trade familial stories while playing Mahjong. In a series of sixteen vignettes that spans generations and continents, this adaptation of Amy Tan's bestselling novel explores cultural conflict and the often-turbulent relationships between four first-generation Chinese-American women (Ming-Na Wen, Tamlyn Tomita, Lauren Tom, Rosalind Chao) and their mothers."},
{ title: "Marvelous and the Black Hole", imageUrl: "https://resizing.flixster.com/K8khZ2evZQv0G-yZTKmRCJWSmXs=/fit-in/180x240/v2/https://resizing.flixster.com/YDevf0owEhfRCTlQgUoN9GAUoDA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I3MzZiOTQ3LTUyNmQtNDE2Yy1hOWRiLTRkOWE5Zjk1YTJiMi5wbmc=", date: 2020, score: 86, synopsis: "A teenage delinquent (Miya Cech) befriends a surly magician (Rhea Perlman) who helps her navigate her inner demons and dysfunctional family with sleight of hand magic. A coming of age comedy that touches on unlikely friendships, grief, and finding hope in the darkest moments."},
{ title: "The Namesake", imageUrl: "https://resizing.flixster.com/qj7bUOXIfRG2JSeb1MPDPbLBrNI=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162466_p_v8_aa.jpg", date: 2006, score: 85, synopsis: "After moving from Calcutta to New York, members of the Ganguli family maintain a delicate balancing act between honoring the traditions of their native India and blending into American culture. Although parents Ashoke (Irrfan Khan) and Ashima (Tabu) are proud of the sacrifices they make to give their offspring opportunities, their son Gogol (Kal Penn) strives to forge his own identity without forgetting his heritage."},
{ title: "Shortcomings", imageUrl: "https://resizing.flixster.com/bh9KbcS9OhQb4vU72fUxkg_8SwM=/fit-in/180x240/v2/https://resizing.flixster.com/tawuN-rm8KiJVaFMUBHaO_U5okk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FhYjY4OWIzLTVlMTItNGI0YS1iMjQ0LThkYjU3OGUzMWViOS5qcGc=", date: 2023, score: 85, synopsis: "Ben, a struggling filmmaker, lives in Berkeley, California, with his girlfriend, Miko, who works for a local Asian American film festival. When he's not managing an arthouse movie theater as his day job, Ben spends his time obsessing over unavailable blonde women, watching Criterion Collection DVDs, and eating in diners with his best friend Alice, a queer grad student with a serial dating habit. When Miko moves to New York for an internship, Ben is left to his own devices, and begins to explore what he thinks he might want."},
{ title: "Tigertail", imageUrl: "https://resizing.flixster.com/v2qkrxPReVVk7yW3dSItUJ9JE2Q=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18095598_p_v8_aa.jpg", date: 2020, score: 82, synopsis: "Years of monotonous work and a loveless marriage turns a once vibrant man into a shell of his former self."},
{ title: "Better Luck Tomorrow", imageUrl: "https://resizing.flixster.com/g-PntmXg4BVDo084MMkJS2ChYso=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p76432_v_v8_aa.jpg", date: 2002, score: 81, synopsis: "An accomplished high school student, Ben (Parry Shen) seems to excel at almost everything except winning over his dream girl, Stephanie (Karin Anna Cheung). When he begins an unlikely friendship with trouble-seeking tough guy Daric (Roger Fan), Ben becomes involved in petty crime that gets increasingly dangerous, with his various illegal ventures extending to include Stephanie and her wealthy beau, Steve (John Cho). Can these restless teens curb their criminal activities before it's too late?"},
{ title: "Charlotte Sometimes", imageUrl: "https://resizing.flixster.com/jfY7oYzaG8GNhJviJNtIj0VVitY=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p77353_v_v8_aa.jpg", date: 2002, score: 81, synopsis: "Michael (Michael Idemoto) and Lori (Eugenia Yuan) have a close relationship that verges on romance. While Michael pines for Lori, she prefers to keep him as a friend, opting to date the less sensitive, more sensual Justin (Matt Westmore) instead. When Michael finally decides to look elsewhere for love, he meets the intriguing Darcy (Jacqueline Kim). Soon the pairing of Michael and Darcy causes jealousy with Justin and Lori, leading to dramatic revelations."},
{ title: "To All the Boys: Always and Forever", imageUrl: "https://resizing.flixster.com/ekx4ptrctUMXC6Bj3KD6gOeeM6A=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19353338_p_v8_aa.jpg", date: 2021, score: 78, synopsis: "As Lara Jean Covey prepares for the end of high school and the start of adulthood, a pair of life-changing trips lead her to reimagine what life with her family, friends, and Peter will look like after graduation."},
{ title: "Flower Drum Song", imageUrl: "https://resizing.flixster.com/0w8Tcpa4i4LSd_vAjnOZ4G_FXdA=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p247_p_v8_aa.jpg", date: 1961, score: 79, synopsis: "In this adaptation of the 1958 Rodgers and Hammerstein Broadway musical, Chinese immigrant Mei Li (Miyoshi Umeki) is betrothed to nightclub boss Sammy Fong (Jack Soo), but he wants to marry showgirl Linda Low (Nancy Kwan). To get out of the arrangement, Sammy pawns her off to wealthy Master Wang (Benson Fong) as a fiancée for his son, Wang Ta (Victor Sen Yung). Mei Li falls in love with Wang, but he wants to pursue Linda, who takes advantage of his affections to test Sammy's love."},
{ title: "The Beautiful Country", imageUrl: "https://resizing.flixster.com/4qhpSJZA21zESXwYfCFKX0ksfTM=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p87145_p_v8_ae.jpg", date: 2004, score: 78, synopsis: "A Vietnamese youth (Damien Nguyen) of mixed race undertakes an arduous journey to the United States to find his American father (Nick Nolte)."},
{ title: "To All the Boys: P.S. I Still Love You", imageUrl: "https://resizing.flixster.com/Uk8hzWwy_zPFMtHxV-tgl5nfwdQ=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17829062_p_v8_aa.jpg", date: 2020, score: 77, synopsis: "As her relationship with Peter continues to grow, Lara Jean reunites with another recipient of one of her old love letters."},
{ title: "Blue Bayou", imageUrl: "https://resizing.flixster.com/fdrO4Mbm1W3c2uGjprmTGawIBXA=/fit-in/180x240/v2/https://resizing.flixster.com/AxyGMoelVMJzfuLHxH3a-bYVbpU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRkMmE1YjcxLTdmNzgtNGYxMi05Y2U2LTIxOGQwYmJjZDFhYS5qcGc=", date: 2021, score: 75, synopsis: "From award-winning writer/director Justin Chon, Blue Bayou is the moving and timely story of a uniquely American family fighting for their future. Antonio LeBlanc (Chon), a Korean adoptee raised in a small town in the Louisiana bayou, is married to the love of his life Kathy (Alicia Vikander) and step-dad to their beloved daughter Jessie. Struggling to make a better life for his family, he must confront the ghosts of his past when he discovers that he could be deported from the only country he has ever called home."},
{ title: "Take Out", imageUrl: "https://resizing.flixster.com/AS6QxBCXxFxvba-nlWpr2rUUB48=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p182016_p_v8_aa.jpg", date: 2004, score: 100, synopsis: "A Chinese immigrant (Charles Jang) in New York works frantically to raise enough money through delivery tips to pay off his $800 debt to smugglers."},
{ title: "I Will Make You Mine", imageUrl: "https://resizing.flixster.com/Kyr91nV-HYeaqPrOPZakxvkIIPI=/fit-in/180x240/v2/https://resizing.flixster.com/KcMwlE5Lh7OqtcLIRb-KQu2WieE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E3NDU2ZWNhLTk2OWQtNDgyNS1iYThjLTQyNGFmOWQwNTIwMi53ZWJw", date: 2020, score: 100, synopsis: "Three women wrestle with life's difficulties while confronting their past relationships with the same man."},
{ title: "Hollywood Chinese", imageUrl: "https://resizing.flixster.com/Zk4NjO04VmZDrciTrdxE_4yDeWA=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p180357_p_v8_aa.jpg", date: 2007, score: 100, synopsis: "Filmmaker Arthur Dong's documentary Hollywood Chinese pays homage to the first century of the American film industry, as specifically colored and influenced by the Chinese immigrants to whom Hollywood owes an inestimable debt. Dong touches on everyone from actress Anna May Wong, of Limehouse Blues (1934) and Lady from Chungking (1943), to the late cameraman James Wong Howe, responsible for giving the Rock Hudson thriller Seconds (1966) such a creepy and inventive look."},
{ title: "Happy Cleaners", imageUrl: "https://resizing.flixster.com/K1kosz2Zmzg6LQj9wiVfY0dcgVc=/fit-in/180x240/v2/https://resizing.flixster.com/JktMLa9KS-LgWUvsAq1D0FLCjIE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ExYjY2ZWJhLWJmOTYtNDMzMy1hYmFmLTcwNjNkOWE5ZjJkMy5qcGc=", date: 2019, score: 100, synopsis: "When a new landlord comes around, Mr. and Mrs. Choi find their dry cleaning business, Happy Cleaners in Flushing, Queens, in jeopardy of closing after 17 years. While they make every effort to save the business, their daughter Hyunny and son Kevin are also at their own tough crossroads of life under the pressure of their parents' high hopes. Struggling through economic turmoil, cultural clashes, and generational divide, the Choi family realizes that the only way to be stronger is to embrace each other."},
{ title: "The Donut King", imageUrl: "https://resizing.flixster.com/GcAYts3E4Uuq3p1W0ZTfruOd_7o=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18945359_p_v8_aa.jpg", date: 2020, score: 97, synopsis: "Cambodian refugee Ted Ngoy builds a multi-million dollar empire by baking America's favorite pastry -- the donut."},
{ title: "In the Family", imageUrl: "https://resizing.flixster.com/AI9T-d0hOzhqy0mxW8_gmX9VXQA=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8867845_p_v8_aa.jpg", date: 2011, score: 96, synopsis: "After his partner dies in a car accident, a gay man (Patrick Wang) must fight for custody of the boy (Sebastian Brodziak) he's come to love as his own son."},
{ title: "The Wedding Banquet", imageUrl: "https://resizing.flixster.com/BpcENRRtAMw0bJQZef6RRx9rXB4=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16040_p_v8_ac.jpg", date: 1993, score: 97, synopsis: "Wai-Tung (Winston Chao) and his boyfriend (Mitchell Lichtenstein) live happily as a gay couple in New York City. Wai-Tung has not been open about his sexuality with his Taiwanese parents (Sihung Lung, Ah-Leh Gua), and decides to acquiesce to their wish for a traditional Chinese union by marrying Wei-Wei (May Chin), a struggling artist desperate for a green card. But the simple arrangement turns into a lavish debacle when Wai-Tung's parents plan an extravagant wedding banquet."},
{ title: "Spa Night", imageUrl: "https://resizing.flixster.com/kjJ23W9z3Yp7PUdPrhxc1DSkWM8=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12568704_p_v8_ac.jpg", date: 2016, score: 96, synopsis: "A closeted Korean-American teenager follows his desires and finds more than he bargains for at a Korean spa."},
{ title: "New York Ninja", imageUrl: "https://resizing.flixster.com/TyZiecNWUMWznYukOsPSebPw9oc=/fit-in/180x240/v2/https://resizing.flixster.com/bXCe34TEEPkzDdv8asdCDPerlMk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JlMWZkODc0LWViZDUtNDM1Zi1iZTU1LTk4ZDFhM2QzZmM2Zi5qcGc=", date: 2021, score: 96, synopsis: "Taekwondo film legend John Liu stars as a New York everyman who, when pushed too far, is forced to take the law into his own hands and become \"The New York Ninja\" -- a vigilante set on righting wrongs and keeping the peace in a Big Apple on the brink of chaos. Originally filmed in 1984, this martial arts riot was never completed and sat, unedited in a warehouse, for nearly 40 years before being finished by the staff at Vinegar Syndrome."},
{ title: "Chang Can Dunk", imageUrl: "https://resizing.flixster.com/etec3OoBnNtr2qxtGQNNvCVKUeU=/fit-in/180x240/v2/https://resizing.flixster.com/X1Wg117OxEo1hWoQVm3wz_3Gh_c=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZjZjE3OTY4LTRjZTktNDY0ZC05YmY1LTUxZmQ2MzFiMjE3ZS5qcGc=", date: 2023, score: 96, synopsis: "\"Chang Can Dunk\" follows Chang, a 16-year-old, Asian American high school student in the marching band, who bets the school basketball star that he can dunk by Homecoming. The bet leads the 5' 8\" Chang on a quest to find the hops he needs to dunk in order to impress his crush, Kristy, and finally gain the attention and respect of his high school peers. But before he can rise up and truly throw one down, he\'ll have to reexamine everything he knows about himself, his friendships and his family."},
{ title: "The Grace Lee Project", imageUrl: "https://resizing.flixster.com/kFQ5tU3TJ76q5zEBDDGFfU7Lbig=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p160440_p_v8_aj.jpg", date: 2005, score: 95, synopsis: "When filmmaker Grace Lee discovered that her name is very common among Asian-Americans, she also found out that it carries with it a stereotype of the \"good\" Asian; a quiet, well-behaved hard worker. To see if this stereotype holds any water, the director travels the country interviewing other women who share her name. She discovers a wide range of women, and while some fit the image of the name, others, like a goth artist and community activist, certainly do not."},
{ title: "Journey from the Fall", imageUrl: "https://resizing.flixster.com/bIPZBZa19y6UeZFAGAh4WLTQSDk=/fit-in/180x240/v2/https://images.fandango.com/cms/assets/5d84d010-59b1-11ea-b175-791e911be53d--rt-poster-defaultgif.gif", date: 2007, score: 92, synopsis: "Thirteen years after the end of the Vietnam War, a family who was tragically affected by the war are forced to emigrate to America."},
{ title: "Twinsters", imageUrl: "https://resizing.flixster.com/1mPsIa22YWyspPwOjLZS0swq3Zo=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11857775_p_v8_aa.jpg", date: 2015, score: 92, synopsis: "A French fashion design student stumbles upon a familiar face on YouTube: her own. Finding the resemblance uncanny, she sends the video's American creator a message and the two discover that they are, in fact, twins separated at birth."},
{ title: "Colma: The Musical", imageUrl: "https://resizing.flixster.com/WJb8paono2DOqDiHso-fU8IaNu8=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p168890_p_v8_aa.jpg", date: 2006, score: 90, synopsis: "Three friends (Jake Moreno, H.P. Mendoza, L.A. Renigen), all recent high-school graduates, wonder what to do with the rest of their lives."},
{ title: "The Search for General Tso", imageUrl: "https://resizing.flixster.com/0zkq0kHsZ9ofjFRTuF99cepx6Wg=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10735672_p_v8_aa.jpg", date: 2014, score: 90, synopsis: "Filmmaker Ian Cheney explores the origin of a spicy-sweet chicken dish that is a popular item in many of America's Chinese restaurants."},
{ title: "Meditation Park", imageUrl: "https://resizing.flixster.com/ED2uu1O6YWUvdT3FoD3-uMDvcF4=/fit-in/180x240/v2/https://resizing.flixster.com/dO3_il1uoUPik0HMOxp3KVr3MNs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIxZjc1MTBkLTIyNWItNGIzNC04ODgyLTIyY2QzMGY1MzVjYy53ZWJw", date: 2017, score: 90, synopsis: "A dutiful wife and mother re-examines her veneration of her husband after she finds another woman's underwear in his laundry."},
{ title: "The Problem with Apu", imageUrl: "https://resizing.flixster.com/3s9tWWZZ9K5ZmKCIZrTX08iy0Cg=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14683371_p_v8_aa.jpg", date: 2017, score: 90, synopsis: "Comic Hari Kondabolu examines the East Indian cartoon character Apu on the long-running TV series \"The Simpsons.\""},
{ title: "The Motel", imageUrl: "https://resizing.flixster.com/9sLJndTOShl4S_7ZDAXebwxWN-w=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p161095_v_v8_aa.jpg", date: 2005, score: 88, synopsis: "While shouldering the burden of cleaning his family's sleazy motor inn, 13-year-old Ernest (Jeffrey Chyau) dreams of being a writer. A ne'er-do-well named Sam (Sung Kang) arrives for a night but stays longer, and the fatherless boy sees in him a male figure to emulate."},
{ title: "Therapy Dogs", imageUrl: "https://resizing.flixster.com/TBQ8HN69Ts0Ml3bOJ_C0zMdwoi4=/fit-in/180x240/v2/https://resizing.flixster.com/VPK8Oh_6Mn8UiHBMVYcZ7fwBuPA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA4NTM4OTRiLWFjYWItNGIwNC1hMDM1LTExZWU5YmYwMWMwNC5qcGc=", date: 2022, score: 89, synopsis: "Ethan and his best friend Justin are students trying to make sense of their high school existence. In what will be the last chapter of their teenage lives and the beginning of adulthood beyond, they decide to make the ultimate senior video in their search for answers. Exploring teenage suburbia in a no-brakes adventure, questions arise whether there's more to their lives than simply growing up. A headstrong and experimental feature, THERAPY DOGS is more than a coming-of-age film, it's a time capsule for the rebellious. For the ones that pushed the boundaries when deciding to leave their childhood behind."},
{ title: "White Rabbit", imageUrl: "https://resizing.flixster.com/bE3itDDJjtR43RWzeDXwLIGbyrc=/fit-in/180x240/v2/https://resizing.flixster.com/9ICrU0CMFKzpHcZP3fIZVLvfTXs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQxOTkwMWMwLWQxZWYtNDEwMS1hNjQyLWYwZTMxMzhmNzk1NC53ZWJw", date: 2018, score: 88, synopsis: "A Korean-American performance artist in Los Angeles struggles to be authentically heard through her many identities."},
{ title: "The Fabulous Filipino Brothers", imageUrl: "https://resizing.flixster.com/8FNkqXlgS_GLOuvYm8Jy6HC_lMw=/fit-in/180x240/v2/https://resizing.flixster.com/XKPK6z7fwQNpBUXCjriRu3SatzE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2NDRjMTAyLTQ3MWItNGQ0Zi1iYjQ1LWZlZDBiMTNkYmFmMC5qcGc=", date: 2021, score: 88, synopsis: "The bond between four brothers transcends their questionable life choices as they come together for a family wedding."},
{ title: "Dim Sum: A Little Bit of Heart", imageUrl: "https://resizing.flixster.com/tCMpiGIAR-c2uZaUABN5Uhsjy5o=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p46720_p_v8_aa.jpg", date: 1985, score: 90, synopsis: "Geraldine Tam (Laureen Chew) is the only one of her siblings to still live at home. Her mother (Kim Chew) -- who, after visiting a fortuneteller, is convinced she will die within the year -- would like nothing more than to see her daughter married. But though Geraldine has a boyfriend, she is reluctant to accept his proposal of marriage because she feels guilty about leaving her traditional Chinese mother alone. Despite their feuding, Geraldine and her mother become ever closer."},
{ title: "Wedding Season", imageUrl: "https://resizing.flixster.com/4vPVE-N15XCfh9W2bHy6bCCdcn4=/fit-in/180x240/v2/https://resizing.flixster.com/bj7nLrkHJuHJ9H_wBx-Revw6Y1Y=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NjZjJiNDFjLTcwM2YtNDA5Ny1hMTM2LWUxYmNkOTdiOGNkMi5qcGc=", date: 2022, score: 88, synopsis: "After breaking off her engagement, leaving a successful banking career behind in the city, and moving to New Jersey for a fresh start, Asha (Pallavi Sharda) couldn't feel more alive. Her mother, on the other hand, thinks that her oldest daughter is about to miss a lifetime of happiness if she doesn't take her focus away from her new startup job and place it on finding a husband instead. Taking matters into her own hands, Asha's mother creates an online dating profile in order to set Asha up with a \"perfect\" match."},
{ title: "Advantageous", imageUrl: "https://resizing.flixster.com/QS1WODFA-XWfc57ThYy276cIreQ=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11814306_p_v8_aa.jpg", date: 2015, score: 87, synopsis: "In a future where opulence overshadows economic hardship, Gwen and her daughter Jules try to hold on to their joy."},
{ title: "Land of Gold", imageUrl: "https://resizing.flixster.com/eNg9tLspdpj-Wavwt2KWKhrI-Dk=/fit-in/180x240/v2/https://resizing.flixster.com/zn_X4xU595VBiFL5x0G32cGqdBU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5ZmZiN2UwLWRiMDktNGFlYy04YmJmLWNjMWRlN2M2MzQyYS5qcGc=", date: 2022, score: 89, synopsis: "Kiran Singh, a 1st generation Punjabi-American, has just accepted a last-minute trucking job to Boston which causes a blow-up argument with Preeti, his 37-week pregnant wife, who admits to feeling abandoned. En route to complete this \"one final job,\" Kiran discovers Elena, a 10-year-old Mexican-American stowed away in his trailer. After debating the merits of turning her to the police, Kiran deduces she might be undocumented, and instead resolves to shepherd Elena to her uncle in Maine despite putting his own livelihood in jeopardy."},
{ title: "In Between Days", imageUrl: "https://resizing.flixster.com/XAEU-1ySQmto8iRWnry7kWZWWCY=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p169437_v_v8_aa.jpg", date: 2006, score: 87, synopsis: "A lonely teen (Jiseon Kim) falls in love with her only friend (Taegu Andy Kang)."},
{ title: "Front Cover", imageUrl: "https://resizing.flixster.com/lvsCp3V8DZo3sbmb4kplbIWvczg=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12132863_p_v8_ab.jpg", date: 2015, score: 83, synopsis: "A growing friendship between a gay New York fashion stylist (Jake Choi) and a rising Beijing actor (James Chen) turns into romance."},
{ title: "American Revolutionary: The Evolution of Grace Lee Boggs", imageUrl: "https://resizing.flixster.com/4ifdnV7SSOHpFjHwmJm0iQu85tw=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10046468_p_v8_aa.jpg", date: 2013, score: 83, synopsis: "In Detroit, a 97-year-old Chinese-American woman has immersed herself in social activism for more than 70 years."},
{ title: "Go Back to China", imageUrl: "https://resizing.flixster.com/5_Z16dpVmSsG9w0zulYLuljWpBY=/fit-in/180x240/v2/https://resizing.flixster.com/-ZE-VRm3tEmSH535X891rFqlHNs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFiYzM0ZmI3LTY4OTMtNGEzOC04MGQ3LWZiNjFjMTZiYzg2NC53ZWJw", date: 2019, score: 83, synopsis: "A spoiled rich girl is sent to work for her family's toy business in China after she is cut off by her father for blowing through most of her trust fund."},
{ title: "Picture Bride", imageUrl: "https://resizing.flixster.com/Z3dRTOLoOvJLkrkrXL7fZaQUgwA=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p57637_p_v8_ad.jpg", date: 1994, score: 82, synopsis: "After the father of Riyo (Yûki Kudô) dies, she becomes the arranged wife of Matsuji (Akira Takayama), a migrant worker in Hawaii. Riyo travels from Japan to the United States, but finds it difficult adapting to the hard life working on a sugar plantation and living with Matsuji. Riyo becomes friends with another woman, Kana (Tamlyn Tomita), who came over as a bride as well. Riyo begins saving money to return to Japan, but tragic events make her evaluate where she belongs."},
{ title: "Today's Special", imageUrl: "https://resizing.flixster.com/jVIRV1KxN6lxG_8akoX3soz8n7o=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8329959_p_v8_aa.jpg", date: 2009, score: 81,synopsis: "A young Manhattan chef rediscovers his passion for life by making Indian food."},
{ title: "Never Forever", imageUrl: "https://resizing.flixster.com/UJjFhKXsOy3wPbeSrnDS12B7syE=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p178976_v_v8_aa.jpg", date: 2007, score: 80, synopsis: "An affair with an immigrant worker allows a woman to find her true self."},
{ title: "Unseen", imageUrl: "https://resizing.flixster.com/jXmPnjBKWFsl4xlrkU4B7juVdTU=/fit-in/180x240/v2/https://resizing.flixster.com/pjShaHAgP7L7vVrGANjwVbqIymU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxZjUyMmE0LWY1NWYtNGFhMi1hY2VjLWNmNjJhMjU4ZTBiNC5qcGc=", date: 2023, score: 82, synopsis: "Two women form an unlikely connection when a depressed gas station clerk Sam (Jolene Purdy), receives a call from Emily (Midori Francis), a nearly blind woman who is running from her murderous ex in the woods. Emily must survive the ordeal with Sam being her eyes from afar using video call. Michael Patrick Lane (Dynasty) will play the ex."},
{ title: "The Crimson Kimono", imageUrl: "https://resizing.flixster.com/Bj09UMRqIhwBIJRvcp59fNGqcXQ=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9880_p_v8_aa.jpg", date: 1959, score: 80, synopsis: "A Los Angeles detective (Glenn Corbett) and his Japanese partner (James Shigeta) woo an artist (Victoria Shaw) while solving a stripper's murder."},
{ title: "A Thousand Years of Good Prayers", imageUrl: "https://resizing.flixster.com/aChncP2CSTQDjhMUXjV7a6l2Dyc=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p180998_p_v12_ae.jpg", date: 2007, score: 79, synopsis: "In the wake of his wife's death, Shi (Henry O) leaves his native China to find his estranged daughter, Yilan (Faye Yu), in the United States. There, Shi befriends Madam (Vida Ghahremani), an Arab-American mother who can relate to his feelings of isolation and culture shock. After having an awkward reunion with Yilan, Shi realizes just how far apart they've grown from each other. And though he can barely speak English, Shi decides to stay permanently, hoping to mend their broken relationship."},
{ title: "The Tiger Hunter", imageUrl: "https://resizing.flixster.com/IG61qV8fx9hTkmUqTKC204Q5Rf8=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13415671_p_v8_ac.jpg", date: 2016, score: 79, synopsis: "Sami Malik, a young Indian, travels to America in the 1970s. He dreams of becoming an engineer to impress his childhood crush and live up to the legacy of his father, a legendary tiger hunter. When Sami's job falls through, he takes a low-end job and joins with a gang of oddball friends in hopes of convincing his childhood sweetheart that he's far more successful than he truly is -- or perhaps ever could be."},
{ title: "Children of Invention", imageUrl: "https://resizing.flixster.com/_HFoUBxRMr69fcRYp7uuioV5iIY=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3526636_p_v8_aa.jpg", date: 2009, score: 79, synopsis: "Two young children are left to fend for themselves when their mother disappears."},
{ title: "Seoul Searching", imageUrl: "https://resizing.flixster.com/_na-0IlB6Pgy4unggd14fN5OZro=/fit-in/180x240/v2/https://resizing.flixster.com/te6BaG_GyJc0M_ViRqDAJN8URDo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NhMzRmN2M4LWYyZGQtNDg1OC1hYjQ4LTM5NTY0NTYyMjEwMS53ZWJw", date: 2015, score: 76, synopsis: "In 1986, teens attending a government camp for foreign born teenagers have wild experiences."},
{ title: "Documented", imageUrl: "https://resizing.flixster.com/hFqDp7dJeNpwXLnD-IWZdFqXXwI=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10365197_v_v8_aa.jpg", date: 2013, score: 75, synopsis: "Journalist Jose Antonio Vargas becomes a crusader for immigration reform."},
{ title: "Harold & Kumar Go to White Castle", imageUrl: "https://resizing.flixster.com/5iMq3wn9H8gdNz5n6TJKOerqwCg=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p34664_p_v8_al.jpg", date: 2004, score: 75, synopsis: "Nerdy accountant Harold (John Cho) and his irrepressible friend, Kumar (Kal Penn), get stoned watching television and find themselves utterly bewitched by a commercial for White Castle. Convinced there must be one nearby, the two set out on a late-night odyssey that takes them deep into New Jersey. Somehow, the boys manage to run afoul of rednecks, cops and even a car-stealing Neil Patrick Harris before getting anywhere near their beloved sliders."},
{ title: "Robot Stories", imageUrl: "https://resizing.flixster.com/kXttr4Ov7ZGZJR12AT4LDuxZYmY=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p80584_v_v8_aa.jpg", date: 2002, score: 74, synopsis: "Four short tales revolve around a couple with a robotic baby, a mother (Wai Ching Ho) with a comatose son, office workers and an aging artist."},
{ title: "It's Already Tomorrow in Hong Kong", imageUrl: "https://resizing.flixster.com/nqMZhxQnJoTj37Q2jRlrAvCqVMQ=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11905215_p_v8_ab.jpg", date: 2015, score: 74, synopsis: "A budding attraction develops between a U.S. expatriate (Bryan Greenberg) and a Chinese-American woman (Jamie Chung) who's visiting Hong Kong for a business trip."},
{ title: "Dragon: The Bruce Lee Story", imageUrl: "https://resizing.flixster.com/vZ76NhNQJE-ULfvbzCUwkSiyXwc=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14756_p_v8_ae.jpg", date: 1993, score: 74, synopsis: "Bruce Lee's (Jason Scott Lee) rise begins in Hong Kong, as a young boy receiving traditional Chinese martial arts training. After an altercation compels young Bruce to leave the country, his father (Ric Young) sends him to the United States, imploring him to seek success that even Hong Kong will recognize. Bruce begins by teaching martial arts to American students, and eventually becomes a popular actor on the \"Green Hornet\" television series, known in Hong Kong as \"The Kato Show.\""},
{ title: "Cavite", imageUrl: "https://resizing.flixster.com/6fe44tmh0TBGntxrW1o8sSQ9B9g=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162463_p_v7_aa.jpg", date: 2005, score: 73, synopsis: "When Adam (Ian Gamazon), an American with roots in the Philippines, returns to his native land to bury his father, he receives a call that his sister and mother have been abducted. The caller soon makes specific demands of Adam, and he must follow them exactly to avoid harm coming to his remaining family. Eventually Adam discovers that the kidnapper is affiliated with a Muslim terrorist organization called the Abu Sayyaf, and the stakes in the tense situation become increasingly higher."},
{ title: "Double Happiness", imageUrl: "https://resizing.flixster.com/mssVUg2cTX7YjSZrbUvz1cmjULE=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16071_p_v8_aa.jpg", date: 1994, score: 75, synopsis: "Jade Li (Sandra Oh) is an independent 22-year-old Chinese-Canadian struggling to live the life she wants while not disappointing her traditional Chinese parents. In an effort to encourage their daughter to start a family, Jade's parents set her up on a series of dates with nice, traditional Chinese boys, but Jade is not interested. When she meets a Caucasian grad student named Mark (Callum Rennie), she has to decide how much her own happiness is worth."},
{ title: "The Debut", imageUrl: "https://resizing.flixster.com/28hmK3s2Lia9zrPggi9PUPraKLA=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27428_v_v10_ae.jpg", date: 2001, score: 71, synopsis: "A Filipino-American teenager (Dante Basco) reluctantly attends the coming-out party his father (Tirso Cruz III) is giving for his sister."},
{ title: "Americanish", imageUrl: "https://resizing.flixster.com/AXD71JQ_D23CQkrJJ3to_adTldY=/fit-in/180x240/v2/https://resizing.flixster.com/Z-yzHPanzx8NppymoHZQPHCqdWY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxMjAwYzU1LTg3YTEtNGQ4NC04YTA1LWEwYzk5ZWZkYTA5OC5qcGc=", date: 2021, score: 73, synopsis: "Welcome to America: Where dreams come true...ish. A break from the traditional romantic comedy, Americanish highlights different layers of womanhood as they intersect with cultural and societal expectations. Americanish invites viewers into the home and lives of three marriage-aged women as they navigate the often turbulent waters of romance, culture, career, and family. We follow the joys and tribulations of career-driven sisters Maryam and Sam Khan, and their fish-out-of-water cousin Ameera."},
{ title: "Bad Rap", imageUrl: "https://resizing.flixster.com/Yf4I5AlJ2OKkZJMknLl3jZ7LG2U=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13171024_p_v8_ab.jpg", date: 2016, score: 70, synopsis: "Four Asian-American rappers have to overcome obstacles as they try to make it big."},
{ title: "A Very Harold & Kumar Christmas", imageUrl: "https://resizing.flixster.com/xsTp7Sz7tfX9fNsbiYuCTevy3jw=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8718205_p_v13_ac.jpg", date: 2011, score: 68, synopsis: "Six years after their last adventure, stoner pals Harold (John Cho) and Kumar (Kal Penn) have grown apart and found new friends. As each is busy making holiday preparations, a mysterious package mistakenly arrives on Kumar's doorstep. Unfortunately, Kumar's attempt to redirect the package to Harold goes up in smoke -- along with a prize Christmas tree belonging to Harold's father-in-law. The pair's journey across New York City to find a replacement tree threatens to blow Christmas Eve sky-high."},
{ title: "The Big Brawl", imageUrl: "https://resizing.flixster.com/MieCuoCyseRu7okzP2aDp3Ez2vE=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6939_p_v8_aa.jpg", date: 1980, score: 67, synopsis: "In the 1930s, an effete Chicago mobster (Jose Ferrer) pits a Chinese kicker (Jackie Chan) against a king-size brute called Kiss."},
{ title: "Ping Pong Playa", imageUrl: "https://resizing.flixster.com/I-lQUrDNjU6aQu7E6XeBq3MPMHQ=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p180255_p_v8_aa.jpg", date: 2007, score: 64,synopsis: "A slacker (Jimmy Tsai) must preserve his family's honor by winning a table tennis tournament."},
{ title: "Linsanity", imageUrl: "https://resizing.flixster.com/FrGina-56VSG0KfBQgqLNM6nht4=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9750608_p_v13_ac.jpg", date: 2013, score: 65, synopsis: "Filmmaker Evan Jackson Leong chronicles the rise of basketball star Jeremy Lin, the first man of Chinese/Taiwanese descent to play in the NBA."},
{ title: "Miami Connection", imageUrl: "https://resizing.flixster.com/_kjNSvFnzEMphN9BjzYRgzFNS0s=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p51774_p_v8_aa.jpg", date: 1988, score: 65, synopsis: "Drug dealers get a free tae-kwon-do lesson from a college band called Dragon Sound (Y.K. Kim, Vincent Hirsch, William Ergle)."},
{ title: "Bride & Prejudice", imageUrl: "https://resizing.flixster.com/boNJJPc0I6lytIR4uCsMabhWfbc=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p35268_p_v8_aa.jpg", date: 2004, score: 64, synopsis: "With four beautiful daughters of marrying age, Manorama (Nadira Babbar) and Chaman Bakshi (Anupam Kher) frantically seek out the perfect husbands for their children. Yet their eldest daughter, Lalita (Aishwarya Rai), is intent upon marrying at her own choosing, for love. Lalita endures a number of hopeful suitors, but the American William Darcy (Martin Henderson) seems different -- and not always in a good way. Misunderstandings, schemes and lies threaten to keep the two from true love."},
{ title: "Come See the Paradise", imageUrl: "https://resizing.flixster.com/V7kdqaACX98cBehK2BQeTutR3gI=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12477_p_v10_ac.jpg", date: 1990, score: 64, synopsis: "In this drama from director Alan Parker, on-the-lam Jack McGurn (Dennis Quaid) flees to Los Angeles and takes a job as a projectionist at a movie theater owned by a Japanese-American man (Sab Shimono). Jack falls for the owner's daughter, Lily (Tamlyn Tomita), but they are forced to elope to Seattle when her father forbids the relationship. The couple marry and have a daughter, but when World War II breaks out, Jack is powerless to stop his new family's forced internment."}
];

titles.forEach((title, index) => {
    title.id = index; // Assigning a simple ID based on index (consider using a more robust method in production)
  });

let isRemoveMode = false; // Flag to track if we're in remove mode


// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ""; // Clear existing content

    titles.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute('data-id', item.id); // Use data attribute to store the unique ID
        card.innerHTML = `
            <div class="card-content">
                <h2>${item.title}</h2>
                <img src="${item.imageUrl}" alt="${item.title} Poster">
                <div class = "more-content">
                <p>Year: ${item.date}</p>
                <p>Score: <img src="tomato.png" alt="Tomato" class="tomato-icon"> ${item.score}%</p>
                <p>Synopsis: ${item.synopsis}</p>
                </div>
            </div>
        `;
        card.style.display = "block";

        // Bind click event for removal if in remove mode
        card.addEventListener('click', function() {
            if (isRemoveMode) {
                const cardId = this.getAttribute('data-id');
                removeCard(cardId);
                toggleRemoveMode();
                document.getElementById("searchInput").value="";
            }
        });

        cardContainer.appendChild(card);
    });

}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

function addCard() {
    const title = prompt("Enter the movie's title:");
    const imageUrl = prompt("Enter the URL for the movie's poster image:");
    const date = prompt("Enter the movie's release year:");
    const score = prompt("Enter the movie's Rotten Tomatoes score (%):");
    const synopsis = prompt("Enter the movie's synopsis:");
    const id = titles.length;

    // Create a new item object with the provided information
    const newItem = {
        id,
        title,
        imageUrl,
        date: parseInt(date), // Ensure 'date' is stored as an integer
        score: parseInt(score), // Ensure 'score' is stored as an integer
        synopsis
    };

    // Add the new item to the 'titles' array
    titles.push(newItem);

    // Optionally, clear the search input if you have a search feature
    document.getElementById("searchInput").value = "";

    // Refresh the displayed cards to include the new one
    showCards();
    sortAndShowCards(document.getElementById('sortBy').value);
    document.querySelector(`[data-id="${id}"]`).scrollIntoView({
        behavior: 'smooth'});
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

// Use the existing titles array and functions, then add the toggleRemoveMode function
// function toggleRemoveMode() {
//     isRemoveMode = !isRemoveMode; // Toggle the flag
//     const modeText = isRemoveMode ? "Cancel Remove Mode" : "Remove Card Mode";
//     document.getElementById("toggleRemoveMode").textContent = modeText;
// }

function removeCard(id) {
    // Find the index of the title with the given ID
    const index = titles.findIndex(item => item.id.toString() === id);
    if (index > -1) {
        titles.splice(index, 1); // Remove the item
        showCards(); // Refresh the displayed cards
        console.log("REMOVING" + id)
    } else {
        console.error("Card not found");
    }
}


function searchCards() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase(); // Get the current value of the input field and convert it to lower case for case-insensitive comparison

    // Filter the titles array to get only those shows whose title includes the search query
    const filteredTitles = titles.filter(show => show.title.toLowerCase().includes(searchQuery));

    // Now display only the filtered titles
    showFilteredCards(filteredTitles);
}

function showFilteredCards(filteredTitles) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear the card container before showing filtered cards

    // Similar to showCards, but use filteredTitles instead of the original titles array
    filteredTitles.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute('data-id', item.id); // Use data attribute to store the unique ID
        card.innerHTML = `
        <div class="card-content">
        <h2>${item.title}</h2>
        <img src="${item.imageUrl}" alt="${item.title} Poster">
        <div class = "more-content">
        <p>Year: ${item.date}</p>
        <p>Score: <img src="tomato.png" alt="Tomato" class="tomato-icon"> ${item.score} %</p>
        <p>Synopsis: ${item.synopsis}</p>
        </div>
    </div>
            `;
        card.style.display = "block";
        card.addEventListener('click', function() {
            if (isRemoveMode) {
                const cardId = this.getAttribute('data-id');
                console.log(cardId);
                removeCard(cardId);
                toggleRemoveMode();
                document.getElementById("searchInput").value="";
            }
        });
        cardContainer.appendChild(card);
    });
}

function toggleRemoveMode() {
    isRemoveMode = !isRemoveMode; // Toggle the flag
    const modeText = isRemoveMode ? "Cancel Remove Mode" : "Remove Card Mode";
    document.getElementById("toggleRemoveMode").textContent = modeText;

    // Show or hide the remove mode indicator based on isRemoveMode
    document.getElementById("removeModeIndicator").style.display = isRemoveMode ? "block" : "none";
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sortBy').addEventListener('change', function() {
        sortAndShowCards(this.value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Optionally, call sortAndShowCards initially if you want to sort the cards right when the page loads based on the default selection in the dropdown
    // sortAndShowCards(document.getElementById('sortBy').value);
});

function sortAndShowCards(sortBy) {
    // Sort titles array based on the provided criterion
    switch (sortBy) {
        case 'title-asc':
            titles.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'rating-desc':
            titles.sort((a, b) => b.score - a.score);
            break;
        case 'date-asc':
            titles.sort((a, b) => parseInt(a.date, 10) - parseInt(b.date, 10));
            break;
        case 'date-desc':
            titles.sort((a, b) => parseInt(b.date, 10) - parseInt(a.date, 10));
            break;
        default:
            // Handle default case if necessary
            break;
    }

    // Refresh the displayed cards to reflect the sorted titles
    showCards();
    
}