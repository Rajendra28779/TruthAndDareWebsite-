import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  friendlytruthList: string[] = [
    "What’s the most embarrassing thing you’ve ever done in public?",
    "Have you ever kept a secret from your best friend?",
    "If you could swap lives with one person for a day, who would it be?",
    "What’s your biggest fear?",
    "Have you ever lied to get out of trouble?",
    "Who was your first crush?",
    "What’s a talent you have that no one knows about?",
    "If you could have one superpower, what would it be?",
    "Have you ever forgotten someone’s birthday and lied about it?",
    "What’s the weirdest dream you’ve ever had?",
    "If you could eat only one food for the rest of your life, what would it be?",
    "Have you ever sent a text to the wrong person? What was it?",
    "What’s one thing you’ve done that you regret?",
    "If you could go anywhere in the world right now, where would you go?",
    "What’s the last thing you Googled?"
  ];

  friendlydareList: string[] = [
    "Sing your favorite song in a funny voice.",
    "Do your best impression of someone in the group.",
    "Take a selfie and post it with the caption 'Feeling awesome today!'",
    "Say the alphabet backward as fast as you can.",
    "Do 10 jumping jacks while pretending to be a chicken.",
    "Text a random contact in your phone saying, 'You’re amazing!'",
    "Balance a book on your head and walk across the room.",
    "Speak in an accent for the next 5 minutes.",
    "Share the first photo in your phone’s gallery.",
    "Dance without music for 30 seconds.",
    "Let the person to your left write something funny on your forehead with a marker.",
    "Do your best animal impression for the next minute.",
    "Call a random number and say, 'You’re invited to my secret party!'",
    "Tell a joke so bad it’s funny.",
    "Act like your favorite movie character until someone guesses who it is."
  ];

  adultnormaltruthList: string[] = [
    "What’s the most embarrassing thing you’ve ever done in public?",
    "Have you ever had a crush on someone in this room?",
    "What’s the worst haircut you’ve ever had?",
    "If you could go on a date with anyone here, who would it be?",
    "What’s something you’re afraid to tell your parents?",
    "Who is your celebrity crush?",
    "Have you ever had a crush on a teacher?",
    "What’s the most trouble you’ve gotten into at school?",
    "What’s your most awkward childhood memory?",
    "If you could change one thing about yourself, what would it be?",
    "What’s the last lie you told?",
    "Have you ever stolen something? What was it?",
    "What’s the silliest thing you’ve done in front of someone you liked?",
    "If you could be famous for one thing, what would it be?",
    "What’s your biggest fear?"
  ];

  adultnormaldareList: string[] = [
    "Imitate someone in the room for the next minute.",
    "Do your best dance move for 30 seconds.",
    "Post a funny selfie with a random caption.",
    "Call your crush and tell them they are amazing.",
    "Do 15 push-ups.",
    "Talk in a funny accent for the next 5 minutes.",
    "Let someone in the room pick a funny outfit for you to wear for the next 10 minutes.",
    "Dance to a song without music for 30 seconds.",
    "Give someone a compliment.",
    "Pretend to be a waiter/waitress and take someone's 'order'.",
    "Do your best impression of a famous person.",
    "Take a silly picture and post it on social media.",
    "Try to touch your toes for a minute while balancing.",
    "Send a message to a random contact saying, 'I miss you!'",
    "Do your best animal impression."
  ];

  boystruthList: string[] = [
    "What’s the most embarrassing thing you’ve done while trying to impress someone?",
    "Have you ever had a crush on a friend's girlfriend?",
    "What’s the biggest lie you’ve told to get out of trouble?",
    "If you had to choose between your best friend and your dream girl, who would you pick?",
    "What’s the craziest thing you’ve done while drunk?",
    "Have you ever cheated in a relationship? Be honest.",
    "What’s the most inappropriate thing you’ve done at a party?",
    "What’s one thing you’re afraid of that you’ve never told anyone?",
    "What’s the dumbest thing you’ve done to impress a girl?",
    "Who is your biggest competition in life and why?",
    "What’s the most risky thing you’ve ever done?",
    "Have you ever been caught doing something you shouldn’t have? What happened?",
    "Who in the group do you think would survive the longest in a zombie apocalypse and why?",
    "If you could date any celebrity, who would it be?",
    "What’s the most mischievous thing you’ve done as a kid?"
  ];

  boysdareList: string[] = [
    "Do 30 push-ups without stopping.",
    "Send a message to your ex saying, 'I miss you.'",
    "Call someone from your contact list and sing happy birthday to them, even if it’s not their birthday.",
    "Take a shot of hot sauce.",
    "Act like a baby for the next 5 minutes.",
    "Let someone in the room pick your outfit for the rest of the game.",
    "Post a ridiculous status on your social media account.",
    "Do your best impression of a football coach giving a motivational speech.",
    "Dance like nobody’s watching for 1 minute.",
    "Pretend to be your favorite action hero for the next 3 minutes.",
    "Let someone write something embarrassing on your forehead with a marker.",
    "Post a picture of your most embarrassing moment on your social media.",
    "Do 20 jumping jacks while singing a song from your childhood.",
    "Make a prank call to a random number and tell them they're on a game show.",
    "Try to do a handstand for 30 seconds."
  ];

  girlstruthList: string[] = [
    "What’s the most embarrassing thing you’ve done while trying to impress someone?",
    "Have you ever had a crush on someone in this room?",
    "What’s the biggest secret you’ve kept from your best friend?",
    "What’s the most outrageous thing you’ve done to get attention from a guy?",
    "If you had to choose between your best friend and your boyfriend, who would you pick?",
    "What’s the biggest lie you’ve told to get out of trouble?",
    "Have you ever broken someone’s heart? What happened?",
    "What’s the most scandalous thing you’ve done at a party?",
    "What’s your guilty pleasure that you’d never admit in front of others?",
    "If you could change one thing about your appearance, what would it be?",
    "Have you ever sent a flirty text to the wrong person?",
    "Who in the group do you think is the best at keeping secrets?",
    "What’s the weirdest thing you’ve done when you’re alone?",
    "What’s the most embarrassing thing you’ve done in front of a crush?",
    "If you could go on a date with anyone, who would it be?"
  ];

  girlsdareList: string[] = [
    "Dance like nobody’s watching for 1 minute.",
    "Call your crush and tell them they’re amazing.",
    "Take a funny selfie and post it with the caption, 'Feeling fabulous!'",
    "Let someone draw a funny mustache on your face with a marker.",
    "Do your best catwalk down the room.",
    "Post a funny status on your social media about this game.",
    "Send a heart emoji to the last person you texted.",
    "Try to do 20 squats while saying, 'I’m a strong, independent woman!'",
    "Let someone pick an outfit for you to wear for the next 10 minutes.",
    "Pretend to be a famous celebrity for the next 3 minutes.",
    "Do an impression of your favorite singer or actress.",
    "Let someone write something funny on your forehead with a marker.",
    "Call a random number and sing ‘Happy Birthday’ to them.",
    "Do 10 jumping jacks while pretending to be a cheerleader.",
    "Post a video of you singing your favorite song and tag a friend."
  ];

  duocoupletruthlist: string[] = [
    "What’s the first thing you noticed about me?",
    "What’s your idea of a perfect date?",
    "If you could describe me in three words, what would they be?",
    "What’s a small thing someone can do to make you feel loved?",
    "What’s your favorite memory with me so far?",
    "What’s the most romantic thing you’ve ever done for someone?",
    "What’s your biggest fear in a relationship?",
    "If you had to pick one thing you love about yourself, what would it be?",
    "What kind of compliment makes you feel most special?",
    "What’s a quality you admire most in a partner?",
    "What’s something you’ve always wanted to ask me but haven’t yet?",
    "Do you believe in love at first sight, or do you think love takes time?",
    "What’s the most thoughtful thing someone has ever done for you?",
    "What’s a dream you haven’t shared with anyone yet?",
    "What’s one thing about me that makes you smile?",
    "What’s your love language? (e.g., words of affirmation, acts of service, etc.)",
    "If you had to cook dinner for someone special, what would you make?",
    "What song makes you think about love the most?",
    "What’s your biggest goal in life right now?",
    "What’s one thing you’d like to know about me that you don’t already know?"
  ];

  duocoupledarelist: string[] = [
    "Describe your ideal partner without using physical traits.",
    "Share your favorite memory of us so far.",
    "Ask me one question you’ve been too shy to ask before.",
    "Tell me something about yourself that you think I’d find surprising.",
    "Name one thing you admire about me.",
    "Choose a random object near you and explain how it represents your personality.",
    "Share the most interesting or unique compliment you’ve ever received.",
    "Share one thing that makes you feel special in a relationship.",
    "Tell me the one thing you think we have most in common.",
    "Say something nice about me but in a completely serious tone.",
    "If you had one wish about our connection, what would it be?",
    "Act like you’re giving a speech at my birthday party and say something sweet.",
    "Tell me the title of a movie you think fits our story so far.",
    "If you wrote me a letter, what would the first line say?",
    "Make up a nickname for me that you think I’d like.",
    "Tell me your favorite way to spend time with me.",
    "Share one thing about me that caught your attention when we first met.",
    "Act like a fortune-teller and predict something fun about our future.",
    "Tell me a fun fact about yourself that I don’t know.",
    "Describe what an ideal weekend would look like with me."
  ];

  adultdeadtruthlist: string[] = [
    "Who in this group would you kiss if given a chance?",
    "Have you ever had a crush on a friend's sibling?",
    "What’s the most romantic thing you've ever done for someone?",
    "Have you ever been caught in an awkward romantic situation? Share it.",
    "What’s your biggest turn-on?",
    "Have you ever kissed someone you didn’t like?",
    "Who in this group do you think gives the best hugs?",
    "What’s the most daring place you’ve kissed someone?",
    "Have you ever lied to your partner about your feelings?",
    "What’s the most romantic compliment you’ve ever received?",
    "Have you ever sent a flirty text to the wrong person? What happened?",
    "What’s the longest you've gone without showering while dating someone?",
    "What’s the most awkward date you’ve ever been on?",
    "Have you ever been rejected after confessing your feelings?",
    "What’s the wildest thing you’ve done in love or lust?",
    "Who in this group do you think is the best kisser?",
    "Have you ever kissed someone on a dare?",
    "Have you ever been in love with two people at the same time?",
    "What’s your favorite part of a romantic evening?",
    "What’s the naughtiest thought you’ve had about someone in this room?"
  ];

  adultdeaddarelist: string[] = [
    "Give someone a 15-second hug.",
    "Kiss someone on the cheek.",
    "Call your crush and confess your feelings.",
    "Dance like no one is watching for 1 minute.",
    "Sing your favorite romantic song in a funny voice.",
    "Let someone tickle you for 20 seconds.",
    "Exchange a piece of clothing with someone for the next round.",
    "Pretend to be someone in the group for 2 minutes.",
    "Do 10 pushups while looking at someone in the group.",
    "Post ‘I’m feeling flirty today!’ on your social media.",
    "Let someone write something on your arm with a marker.",
    "Send a flirty text to the 5th person in your contact list.",
    "Let someone in the group style your hair however they like.",
    "Imitate a romantic scene from a movie with someone in the group.",
    "Let someone take control of your phone for 1 minute.",
    "Give someone in the group a piggyback ride.",
    "Share a spicy secret with someone privately.",
    "Let someone draw something funny on your face with eyeliner.",
    "Kiss someone’s hand as a sign of admiration.",
    "Give someone in the group a playful slap on the shoulder.",
    "Let someone take a funny selfie with you and post it online.",
    "Eat a spoonful of something spicy or sour.",
    "Pretend to propose to someone in the group.",
    "Let someone dare you to do another dare.",
    "Sit on someone’s lap for the next round.",
    "Act like a cat and cuddle with someone for 1 minute.",
    "Do your best impression of someone in the group.",
    "Let someone whisper something funny or flirty in your ear.",
    "Swap shoes with someone for the next round.",
    "Let someone in the group give you a nickname and call you by it for the rest of the game."
  ];

  honeymoontruthlist: string[] = [
    "What’s one thing about me that makes your heart race?",
    "Describe how you felt during our first kiss.",
    "What’s the most romantic moment we’ve shared so far?",
    "What’s something you’d love to do with me that we haven’t done yet?",
    "What’s one thing about me you find irresistibly attractive?",
    "When did you first realize you were falling for me?",
    "What’s your favorite memory from our wedding day?",
    "What’s one secret desire you’ve never shared with anyone before?",
    "What do you enjoy most when we cuddle together?",
    "What’s your favorite spot to be kissed?",
    "What’s the most special compliment I’ve ever given you?",
    "What’s something you’ve always wanted to try in a romantic setting?",
    "What kind of surprises make you feel the most loved?",
    "What’s your favorite part of my personality?",
    "What’s something you think we’ll laugh about years from now?",
    "How do you like to be pampered the most?",
    "What’s your idea of the ultimate romantic evening with me?",
    "What’s the most daring romantic gesture you’d like us to try?",
    "What’s one thing you can’t wait to do with me this year?",
    "If you had to pick one word to describe our connection, what would it be?"
  ];

  honeymoondarelist1: string[] = [
    "Give me a 1-minute shoulder massage.",
    "Kiss me on the forehead and say something sweet.",
    "Feed me a piece of fruit in the most romantic way possible.",
    "Run your fingers through my hair for 30 seconds.",
    "Draw a heart on my hand with your finger.",
    "Share a secret about your feelings for me while holding my hands.",
    "Whisper something romantic in my ear.",
    "Rest your head on my lap for the next 5 minutes.",
    "Trace your finger along my palm and guess what I’m thinking.",
    "Hold my face gently and tell me what you love most about me.",
    "Lightly tickle me and make me laugh.",
    "Playfully blow on my neck and see my reaction.",
    "Touch my cheek and guess what I’m thinking about.",
    "Let me rest in your arms and sing a soft melody.",
    "Close your eyes and let me kiss you somewhere unexpected.",
    "Make a wish while hugging me tightly for 10 seconds.",
    "Write a short love note and read it to me.",
    "Gently rub my hands and tell me a sweet memory of us.",
    "Touch your nose to mine and hold the gaze for 20 seconds.",
    "Place a kiss on my hand and pretend you’re a prince/princess.",
    "Dance slowly with me for 1 minute, even without music.",
    "Brush your lips lightly on my ear and say something romantic.",
    "Lay your head on my chest and listen to my heartbeat.",
    "Playfully nibble on my ear or pretend to bite softly.",
    "Hold me tightly and say what you’re most grateful for in our relationship.",
    "Explore my favorite spot on my neck with your fingers.",
    "Wrap me in a blanket and give me a soft kiss on the forehead.",
    "Pretend to give me a professional shoulder massage.",
    "Draw something romantic on my back with your finger and let me guess.",
    "Write a romantic line on a piece of paper and hand it to me."
  ];
}
