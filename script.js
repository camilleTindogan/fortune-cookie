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

    //loops throuh the object messages and pushes to message array
    let message =[]
    for(let i = 0 ; i < 3; i++){
            message.push(messages[Object.keys(messages)[i]][Math.floor(Math.random()*3)])
    }

    // final join
    let finalMessage = message.join(' ')
    return finalMessage
}

document.getElementById('main-fortune').innerHTML = messageGenerator()