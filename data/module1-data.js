// ============================================================
// MODULE 1 DATA — Basic Computer Science
// ============================================================
// Dost, yahan par sirf Module 1 ("Basic Computer Science") ki
// lectures ka detailed content aata hai (Introduction, Topics,
// Key Takeaway, Code Snippet waghera).
//
// NAYA LECTURE ADD KARNE KA TARIQA:
// 1. index.html mein DATA.tracks -> module 'm1' -> lectures[]
//    array mein pehle apna naya lecture TITLE add karein.
// 2. Us title ka "key" banane ka rule simple hai:
//    - Special characters (& : , ( ) -) hata dein
//    - Spaces ko underscore "_" bana dein
//    Example: "APIs (Application Programming Interface)"
//             -> key: "APIs_Application_Programming_Interface"
// 3. Neeche isi key ke naam se ek nayi entry add kar dein.
// ============================================================

const MODULE1_LECTURES = {
    'Client_Server': {
        intro: 'Client-server model ki buniyadi samajh. Ye network architecture hai jahan client request bhejta hai aur server response deta hai.',
        topics: ['Client kya hai?', 'Server kya hai?', 'Request-Response Cycle', 'Examples (Web, Email)'],
        takeaway: 'Client-server model internet ki backbone hai. Har web request isi principle par kaam karti hai.',
        code: '// Example: Simple HTTP request\nfetch("https://api.example.com/data")\n  .then(res => res.json())\n  .then(data => console.log(data));'
    },
    'Units_of_Memory': {
        intro: 'Computer memory units ka hierarchy. Bit se lekar Terabyte tak ka safar.',
        topics: ['Bit & Byte', 'KB, MB, GB, TB', 'Memory types (RAM, ROM, Cache)'],
        takeaway: 'Data storage ka scale samajhna AI/ML ke liye zaroori hai kyunki models gigabytes data process karte hain.'
    }
    // Baqi lectures ka data aap yahan neeche add karte rahein...
};
