const messageGenerator = () => {
    const messages = {
        intro: ['Today is looking good!', 
                'This day is one to remember.',
                'Good fortune is coming.'],
        main: ['You are going to get something you\'ve longed for.',
                'You\'ll meet someone that may change your life for the better.',
                'It is guaranteed that you will pull money from one of your clothes in the laundry.'],
        end: ['Keep the positive vibes going.',
            'Share your happiness with others today!',
            'Remember to give others good fortune.']
    }

    let gen1 = Math.floor(Math.random()*2)
    let gen2 = Math.floor(Math.random()*2)
    let gen3 = Math.floor(Math.random()*2)
    let message = [messages.intro[gen1],messages.main[gen2],messages.end[gen3]]
    let finalMessage = message.join(' ')
    return finalMessage
}

console.log(messageGenerator())