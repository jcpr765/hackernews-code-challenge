const rp = require('request-promise');

const REACT_APP_API_ADDRESS= "https://hacker-news.firebaseio.com/v0/item"
const REACT_APP_STORY_ID = 3410773

rp(`${REACT_APP_API_ADDRESS}/${REACT_APP_STORY_ID}.json?print=pretty`).then((body)=>{
    const total = [];
    const obj = JSON.parse(body);
    const {kids, descendants} = obj;
    console.log("Initial length: " + kids.length + "\nTotal children: " + descendants);
    total.push(obj);
    fastTraversal(kids, total).then(()=>{
        console.log("Done");
        console.log(total.length);
    });

});

const traversal = async (ids=[], arr) => {
    if(ids.length > 0){
        const child = ids[0];
        console.log("Current length: " +  ids.length);
        const body = await makeCall(child);
        const obj = JSON.parse(body);
        arr.push(obj);
        console.log('Length: ' + arr.length);
        const {kids} = obj;
        if(kids)
            return await traversal([...ids.slice(1), ...kids], arr);
        else
            return await traversal([...ids.slice(1)], arr);
    }
}


const fastTraversal = async (ids=[], arr) => {
    if(ids.length > 0){
        console.log("Current length: " +  ids.length);
        const promises = [];
        ids.map((id)=>{
            promises.push(makeCall(id));
        });
        responses = await Promise.all(promises);
        const newIds = [];
        responses.map((body)=>{
            const obj = JSON.parse(body);
            arr.push(obj);
            const {kids} = obj;
            if(kids)
                newIds.push(...kids);
        });
        console.log('Length: ' + arr.length);
        return await fastTraversal(newIds, arr);
    }
}

const makeCall = (id) => {
    return rp(`${REACT_APP_API_ADDRESS}/${id}.json?print=pretty`);   
}