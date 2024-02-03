import React, { useState, useEffect } from 'react';

function Footer() {
    const [viewCount, setViewCount] = useState(0);

    useEffect(() => {
        async function updateViews() {
            try {
                let response = await fetch('https://3hp6widwdb.execute-api.us-east-1.amazonaws.com/dev');
                let data = await response.json();
                setViewCount(data);
            } catch (error) {
                console.error('Error updating view count:', error);
            }
        }
    
        updateViews();
    }, []);

    return (
        <div>
            <p>{viewCount} visits</p>
        </div>
    );
}

export default Footer;





// function Footer() {
//     var view_count = 10;
//     async function updateViews() {
//         let response = await fetch('https://3hp6widwdb.execute-api.us-east-1.amazonaws.com/dev');
//         view_count = await response.json();
//         console.log(view_count)
//         return view_count;
//     }
//     // console.log(view_count)

//     updateViews()
//     return (
//         <div>
//             <p>Number of visits: {view_count}.</p>
//         </div>
//     )
// }

// export default Footer;