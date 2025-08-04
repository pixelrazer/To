const heart = document.querySelector('.heart');
        const heartWrapper = document.querySelector('.heart-wrapper');
        let clickCount = 0;

        const content = [
            "The way she acts like a playful little kid around me like I'm her safe place.",
            "Her laugh is so contagious, it pulls me out of any bad mood instantly.",
            "Her smile lights up even the darkest room.",
            "She acts tough, but deep down she's the sweetest, most loving soul I've ever known."
        ];

        heart.addEventListener('click', () => {
            heart.innerHTML = '';

            if (clickCount < content.length) {
                const p = document.createElement('p');
                p.textContent = content[clickCount];
                p.style.color = 'white';
                p.style.textAlign = 'center';
                p.style.fontSize = '18px';
                heart.appendChild(p);
                clickCount++;
            } else {
                // Hide heart wrapper instead of just heart
                heartWrapper.style.display = 'none';

                // Create and show envelope
                const envelope = document.createElement('div');
                envelope.className = 'envelope';
                envelope.innerHTML = `<p>You got mail from your boyfriend 💌<br>Click to open me</p>`;

                document.querySelector('.container').appendChild(envelope);

                // Add click event to envelope
                envelope.addEventListener('click', () => {
                    // Remove the envelope
                    envelope.remove();

                    // Create the love letter
                    const letter = document.createElement('div');
                    letter.className = 'letter';
                    letter.innerHTML = `
                        <h2>Happy Three-Months Anniversary baby!!,</h2>
                        <p>
                            I can't believe it's already been three months since we found each other on that app. So much has happened since then and yet, every moment with you still feels new and magical.
                        </p>
                        <p>
                            When I think of you, I feel warmth in my chest and peace in my soul. You've shown me what it truly means to love and be loved in return. Your laugh is my favorite sound. Your happiness is my greatest joy. In a world full of temporary things, you are my constant.
                        </p>
                        <p>
                            I remember the first time we met in person I was so scared and nervous. If I'm being honest, I was afraid you wouldn't like me in real life. But you proved me wrong in the most beautiful way. You showed me how much you enjoyed being with me, and I'll never forget that.
                        </p>
                        <p>
                            When I saw you for the first time, I couldn't believe my eyes. You were even more gorgeous than I imagined so much so that, for a second, I thought you weren't real. My heart skipped a beat. My hands got sweaty the closer you walked toward me. I was speechless, shy, overwhelmed by how amazing you looked. 
                        <p>
                            The more we spent time together, the more I realized how much I loved being around you. God, hearing your laugh, seeing your smile it just warms my heart and makes my day every time.
                        </p>
                        <p>
                            One of my favorite memories with you was when we took that peaceful walk on the marina walkway, right by our hotel. There were no distractions just us, the ocean breeze, and those cute little ground squirrels you were obsessed with. I still remember how big your smile was seeing them. We laughed, gave them silly names, and just talked. It was simple, but perfect. I didn't want that moment to end.
                        </p>
                        <p>
                            And then came the last day. I didn't want you to leave. It hurt so much knowing I had to take you back. Honestly, part of me thought about just not taking you because I didn't want to let you go. I wanted you to stay with me forever.
                        </p>
                        <p>
                            You've got me completely obsessed with you. I love you harder than I've ever loved anyone in my life. I want you and only you, mi amor. I'm not here to play games. I'm not looking for anyone else, and I'm not here just for the moment. I'm here for the long run with the girl of my dreams.
                        </p>
                        <p>
                            I know it might sound soon, but I truly hope we get married one day. I date to marry, not to mess around. You're the one I want to build a life with.
                        </p>
                        <p>
                            I'll always support you and stand by your side. That night we made promises to each other intimate, vulnerable, meaningful promises and I meant every single one.
                        </p>
                        <p>
                            I wish we've met sooner, I would have shown you true love that you deserve and you won't need to go through all that pain. There isn't a day that goes by that I am very thankful
                            for god for meeting you. No matter the arguments we have, the disagreements, the highs and lows I will always thank god for meeting you and being able to call you mine.
                        </p>
                        <p>
                            Baby the more we spend time together in person or over the phone the more you make me fall in love with you. You make me fall in love with who you are as a person thats who I love the real you.
                            Seeing how you get shy is so cute, seeing how you care makes me feel cared for, seeing how you put in the effort makes me feel like im worth it, seeing how you act so silly makes me happy, 
                            when I see you drive you act so cute and excited like a little kid I love seeing that from you. What I want to say is that everything you do I love and everything you do is you who I love baby. Never change who you are because who you are is the person I'm in love with.
                        </p>
                        <p>
                            I want you to know baby that I will always be loyal to you and only you. You have my absolute loyalty and respect and love. I will never betray your trust or give you a reason to doubt my loyalty and intentions.
                            You are the girl I've been searching for my whole life, You make me feel complete in ways no one has ever had. You make me feel alive and the happiest man alive. Babe I want you to know that you can rely on me about everything and anything.
                            I will not judge you, mock you, make It seem like It's your fault, betray you. I will hear you out, believe your words, stand by your side and most importantly let you know that I am on your side and we will solve it together. 
                            You are not alone anymore baby and with me you will never be alone. You will always have someone by yourside no matter what heck you can murder someone just for bumping into u and making u spill your starbucks drink and I will cover for you.
                            Thats how far my loyalty goes for you. You are someone I hold special deep into my heart and soul mi amor and I will not do anything to ruin what we have between us which is something special and rare.
                        </p>
                        <p>
                            Dispite us being long distance I love every moment with you. I love how we can watch a movie together and play video games and watch anime toooooo. I love watching stuff that you are into baby trust me I will always want to watch shows or movies or anime that you are into.
                            The way we would laugh so much at night playing video games, the way we can watch anime and enjoy it together while we eat something, the way we watch a movie and just enjoy each others company, the way we just talk and yap to each other is just perfect. We don't need to talk we can just be on ft being on tiktok or doing our own thing and just having your presence is more than enough for me.
                            Baby I'm not sure if you noticed but I'm always thinking in my head about everything I can't get it to stop but when I'm with you somehow someway you make me stop thinking and forget about everything, all the stress, all the issues, all the thinking just vanished and only you can do that. No one has ever made me stop thinking like the way you do and that is another reason why I love you because you make me feel so safe with you and comftorable that I don't need to keep on thinking. 
                            I forget about thinking and enjoy the peace you bring me. You are truly special mi amor I hope you know that.
                        </p>
                        <p>
                            Thank you for being with me. I know I'm not always easy to understand. I overthink a lot, even over the smallest things. I know there might be times where I give you a hard time or stress you out and I don't mean to at all.  
                            But thank you for staying and thank you for putting up with me. Thank you for coming to see me. Thank you for everything you do for us.
                        </p>
                        <p>
                            I love you so much, mi amor. I'll never give up on us, or on you. I'll work hard for us, and I'll give you the life you were meant to have.
                            Also mi amor I want you to know that I've never done this for anyone. You're the first one I've done this for mi amor hermosa. If we ever break up I will never love anyone like how I love you, that's how much I love you and value you mi amor. 
                        </p>
                        <p style="margin-top: 30px;">
                            Forever yours,<br>
                            <em>Your one and true love</em> ❤️
                        </p>
                    `;

                    // Add tulips to the letter
                    const letterTulips = `
                        <div class="tulip letter-left">
                            <div class="tulip-stem"></div>
                            <div class="tulip-flower"></div>
                            <div class="tulip-leaf left"></div>
                            <div class="tulip-leaf right"></div>
                        </div>
                        <div class="tulip letter-right">
                            <div class="tulip-stem"></div>
                            <div class="tulip-flower"></div>
                            <div class="tulip-leaf left"></div>
                            <div class="tulip-leaf right"></div>
                        </div>
                        <div class="tulip letter-left-2">
                            <div class="tulip-stem"></div>
                            <div class="tulip-flower"></div>
                            <div class="tulip-leaf left"></div>
                            <div class="tulip-leaf right"></div>
                        </div>
                        <div class="tulip letter-right-2">
                            <div class="tulip-stem"></div>
                            <div class="tulip-flower"></div>
                            <div class="tulip-leaf left"></div>
                            <div class="tulip-leaf right"></div>
                        </div>
                        <div class="tulip letter-left-3">
                            <div class="tulip-stem"></div>
                            <div class="tulip-flower"></div>
                            <div class="tulip-leaf left"></div>
                            <div class="tulip-leaf right"></div>
                        </div>
                        <div class="tulip letter-right-3">
                            <div class="tulip-stem"></div>
                            <div class="tulip-flower"></div>
                            <div class="tulip-leaf left"></div>
                            <div class="tulip-leaf right"></div>
                        </div>
                    `;
                    
                    letter.innerHTML += letterTulips;
                    document.querySelector('.container').appendChild(letter);
                });
            }
        });
