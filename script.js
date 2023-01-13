function generate() {
    const quotes = {
        "Jean Klein": '"It is only through silent awareness that our physical and mental nature can change. This change is completely spontaneous. If we make an effort to change we do no more than shift our attention from one level, from one thing, to another. We remain in a vicious circle. This only transfers energy from one point to another. It still leaves us oscillating between suffering and pleasure, each leading inevitably back to the other. Only living stillness, stillness without someone trying to be still, is capable of undoing the conditioning our biologoical, emotional and psychological nature has undergone. There is no controller, no selector, no personality making choices. In choiceless living the situation is given the freedom to unfold. You do not grasp one aspect over another for there is nobody to grasp. When you understand something and live it without being stuck to the formulation, what you have understood dissolves in your openness. In this silence change takes place of its own accord, the problem is resolved and duality ends. You are left in your glory where no one has understood and nothing has been understood."',
        "Ramana Maharshi": '“There is neither creation nor destruction, neither destiny nor free will, neitherpath nor achievement. This is the final truth.”',
        "Francis Lucille": '“It [realization of Oneness] means being constantly open to the possibility that we are like two flowers looking at each other from two different branches of the same tree, so that if we were to go deep enough inside to the trunk, we would realize that we are one. Just being open to this possibility will have a profound effect on your relationships and on your experience of the world.”',
    }

    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author]
    
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;



}