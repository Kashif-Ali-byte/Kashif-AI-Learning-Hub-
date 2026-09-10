// ============================================================
// MODULE 1 DATA — Basic Computer Science
// ============================================================
// Dost, yahan par sirf Module 1 ("Basic Computer Science") ki
// lectures ka detailed content aata hai — rich card-style schema:
//
//   intro:      short intro paragraph (optional: introList[])
//   topics:     [{ title, icon, color(optional), content, subpoints:[{name,desc}] }]
//   keyPoints:  [ [term, meaning], ... ]  -> renders as a table at the end
//   code:       optional string (renders as a code block)
//
// Colors auto-cycle from a palette if you don't set topic.color.
// Icons use Font Awesome classes, e.g. 'fa-network-wired'.
//
// KEY NAMING RULE: remove special characters (& : , ( ) -) from the
// lecture title, then turn spaces into "_".
// Example: "Client & Server" -> "Client_Server"
// ============================================================

const MODULE1_LECTURES = {
    'Client_Server': {
        intro: 'Client-server model ek network architecture hai jahan client request bhejta hai aur server response deta hai.',
        topics: [
            {
                title: 'Client-Server Model',
                icon: 'fa-network-wired',
                content: 'Ye model do main parts par kaam karta hai — Client aur Server — jo aapas mein requests aur responses ke zariye communicate karte hain.',
                subpoints: [
                    { name: 'Client', desc: 'Wo device ya application jo server se request bhejta hai (jaise browser).' },
                    { name: 'Server', desc: 'Wo system jo client ki request receive kar ke response deta hai.' },
                    { name: 'Request-Response Cycle', desc: 'Client request bhejta hai, server process karta hai aur response wapas bhejta hai.' },
                    { name: 'Examples', desc: 'Web browsing aur Email dono isi client-server model par kaam karte hain.' }
                ]
            }
        ],
        keyPoints: [
            ['Client', 'Request bhejne wala device/app'],
            ['Server', 'Response dene wala system'],
            ['Cycle', 'Request → Process → Response']
        ],
        code: '// Example: Simple HTTP request\nfetch("https://api.example.com/data")\n  .then(res => res.json())\n  .then(data => console.log(data));'
    },
    'Units_of_Memory': {
        intro: 'Computer memory units ka hierarchy — Bit se lekar Terabyte tak ka safar.',
        topics: [
            {
                title: 'Memory Units',
                icon: 'fa-memory',
                content: 'Data storage ka scale samajhna AI/ML ke liye zaroori hai kyunke models gigabytes data process karte hain.',
                subpoints: [
                    { name: 'Bit & Byte', desc: 'Sabse chhoti unit "Bit" hai; 8 Bits milkar 1 "Byte" banate hain.' },
                    { name: 'KB, MB, GB, TB', desc: 'Byte se aage Kilobyte, Megabyte, Gigabyte, aur Terabyte tak scale badhta hai.' },
                    { name: 'Memory Types', desc: 'RAM (temporary), ROM (permanent), aur Cache (fast-access) — teen main types.' }
                ]
            }
        ],
        keyPoints: [
            ['Bit', 'Sabse chhoti data unit'],
            ['Byte', '8 Bits ka majmua'],
            ['RAM / ROM / Cache', 'Memory ki teen basic types']
        ]
    }
    // Baqi lectures ka data aap yahan neeche isi format mein add karte rahein...
};
