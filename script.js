const heart = document.querySelector('.heart');
        let clickCount = 0;

        const content = [
            "She always makes me smile.",
            "She's so strong and brave.",
            "She cares deeply, even when she hides it.",
            "She makes me feel loved like no one else ever has."
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
                // Hide heart
                heart.style.display = 'none';

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
                        <h2>Happy Two-Month Anniversary, baby!!,</h2>
                        <p>
                            I can't believe it's already been two months since we found each other on that app. So much has happened since then and yet, every moment with you still feels new and magical.
                        </p>
                        <p>
                            When I think of you, I feel warmth in my chest and peace in my soul. You've shown me what it truly means to love and be loved in return. Your laugh is my favorite sound. Your happiness is my greatest joy. In a world full of temporary things, you are my constant.
                        </p>
                        <p>
                            I remember the first time we met in person I was so scared and nervous. If I’m being honest, I was afraid you wouldn’t like me in real life. But you proved me wrong in the most beautiful way. You showed me how much you enjoyed being with me, and I’ll never forget that.
                        </p>
                        <p>
                            When I saw you for the first time, I couldn’t believe my eyes. You were even more gorgeous than I imagined so much so that, for a second, I thought you weren’t real. My heart skipped a beat. My hands got sweaty the closer you walked toward me. I was speechless, shy, overwhelmed by how amazing you looked. 
                        <p>
                            The more we spent time together, the more I realized how much I loved being around you. God, hearing your laugh, seeing your smile it just warms my heart and makes my day every time.
                        </p>
                        <p>
                            One of my favorite memories with you was when we took that peaceful walk on the marina walkway, right by our hotel. There were no distractions just us, the ocean breeze, and those cute little ground squirrels you were obsessed with. I still remember how big your smile was seeing them. We laughed, gave them silly names, and just talked. It was simple, but perfect. I didn’t want that moment to end.
                        </p>
                        <p>
                            And then came the last day. I didn’t want you to leave. It hurt so much knowing I had to take you back. Honestly, part of me thought about just not taking you because I didn’t want to let you go. I wanted you to stay with me forever.
                        </p>
                        <p>
                            You've got me completely obsessed with you. I love you harder than I’ve ever loved anyone in my life. I want you and only you, mi amor. I’m not here to play games. I’m not looking for anyone else, and I’m not here just for the moment. I’m here for the long run with the girl of my dreams.
                        </p>
                        <p>
                            I know it might sound soon, but I truly hope we get married one day. I date to marry, not to mess around. You’re the one I want to build a life with.
                        </p>
                        <p>
                            I’ll always support you and stand by your side. That night we made promises to each other intimate, vulnerable, meaningful promises and I meant every single one.
                        </p>
                        <p>
                            Thank you for being with me. I know I’m not always easy to understand. I overthink a lot, even over the smallest things. But thank you for staying. Thank you for coming to see me. Thank you for everything you do for us.
                        </p>
                        <p>
                            I love you so much, mi amor. I’ll never give up on us, or on you. I’ll work hard for us, and I’ll give you the life you were meant to have.
                        </p>
                        <p style="margin-top: 30px;">
                            Forever yours,<br>
                            <em>Your one and true love</em> ❤️
                        </p>
                    `;

                    document.querySelector('.container').appendChild(letter);
                });
            }
        });