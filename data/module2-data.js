// ============================================================
// MODULE 2 DATA — AI Fundamentals
// ============================================================
// Same rich schema as module1-data.js:
//   intro / introList (optional)
//   topics: [{ title, icon, color(optional), content, subpoints:[{name,desc}] }]
//   keyPoints: [ [term, meaning], ... ]
// ============================================================

const MODULE2_LECTURES = {
    // Lecture 1 (uploaded file: "Lecture 1 AI Fundamental and its Branches")
    // -> matches DATA title: "Introduction to Artificial Intelligence"
    'Introduction_to_Artificial_Intelligence': {
        intro: 'Artificial Intelligence is the ability of a machine to think, learn and make decisions like a man.',
        introList: [
            'Generative AI',
            'Computer Vision',
            'AI Speech',
            'NLP (Natural Language Processing)',
            'Extract Data and Insights',
            'Responsible AI'
        ],
        topics: [
            {
                title: 'Generative AI',
                icon: 'fa-wand-magic-sparkles',
                content: 'Generative AI is a branch of artificial intelligence that enables software applications to generate new contents like images, videos, code and many other contents.',
                subpoints: []
            },
            {
                title: 'Computer Vision',
                icon: 'fa-eye',
                content: 'Computer vision is a branch of AI that enables the machines to see and understand the pictures & videos. There are two features that work in computer vision.',
                subpoints: [
                    { name: 'Image Classification', desc: 'The ability of AI which tells that what is in the picture.' },
                    { name: 'Object Detection', desc: 'The ability of AI which tells that what is in the picture and where is located.' }
                ]
            },
            {
                title: 'AI Speech',
                icon: 'fa-microphone',
                content: 'AI Speech is a branch of AI that enables the computer to understand, generate and communicate in human language. There are two features that work in AI speech.',
                subpoints: [
                    { name: 'Speech Recognition', desc: 'It is the ability of AI which hears the speech and converts it into written text. (Speech Recognition = Speech to Text)' },
                    { name: 'Speech Synthesis', desc: 'It is the ability of AI which converts written text into vocalize words.' }
                ]
            },
            {
                title: 'NLP (Natural Language Processing)',
                icon: 'fa-comment-dots',
                content: 'NLP is a branch of AI that helps computers to understand, interpret and manipulate human language. There are four features that work in NLP.',
                subpoints: [
                    { name: 'Entity Extraction', desc: 'It is the ability of AI to find entities like people, places and organizations in a document.' },
                    { name: 'Sentiment Analysis', desc: 'It is the ability of AI which figures out if a body of text is positive or negative and inferring opinions.' },
                    { name: 'Text Classification', desc: 'It is the ability of AI sorting text into specific categories. Example: (Email > Inbox or Spam)' },
                    { name: 'Language Detection', desc: 'It is the ability of AI which identifies the language in which text is written.' }
                ]
            },
            {
                title: 'Data Extraction & Insights',
                icon: 'fa-file-export',
                content: 'It is a branch of AI that retrieves valuable data out of documents, PDF files and images, and turns it into organized and usable data. This AI works through a function called OCR "Optical Character Recognition".',
                subpoints: []
            },
            {
                title: 'Responsible AI',
                icon: 'fa-shield-halved',
                content: 'Responsible AI means making sure that AI is used in an ethical, safe and fair way.',
                subpoints: [
                    { name: 'Fairness', desc: 'Unconscious Bias that may cause a model to produce discriminatory outputs.' },
                    { name: 'Reliability and Safety', desc: 'AI powered applications need to mitigate risks.' },
                    { name: 'Privacy and Safety', desc: 'AI developers need to ensure that the training data is secured.' },
                    { name: 'Inclusiveness', desc: 'AI developers ensure that their solutions do not exclude some users.' },
                    { name: 'Transparency', desc: 'Make users aware of how the system works and any potential limits it has.' },
                    { name: 'Accountability', desc: 'The people and organizations that develop any model are accountable for their solutions.' }
                ]
            }
        ],
        keyPoints: [
            ['Generative AI', 'Generates new content like images, videos and code.'],
            ['Computer Vision', 'Enables machines to see and understand pictures & videos.'],
            ['AI Speech', 'Enables computers to understand, generate and communicate in human language.'],
            ['NLP', 'Helps computers understand, interpret and manipulate human language.'],
            ['Data Extraction & Insights', 'Retrieves valuable data from documents, PDFs and images using OCR.'],
            ['Responsible AI', 'Ensures AI is used in an ethical, safe and fair way.']
        ]
    }
    // Agla lecture yahan neeche isi format mein add hota rahega...
};
