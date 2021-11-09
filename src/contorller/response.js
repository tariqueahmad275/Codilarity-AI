const got = require('got');


// var getResponse = async (req, res) => {
//    const prompt = req.body.prompt
//    console.log(prompt)
//     const url = 'https://api.openai.com/v1/engines/davinci-codex/completions'
//     const params = {
//         "prompt": prompt,
//         "temperature": 0.64,
//         "max_tokens": 1000,
//         "top_p": 1.0,
//         "frequency_penalty": 0.55,
//         "presence_penalty": 0.0,
//         "stop": ["##"]
//     };
//     const headers = {
//         'Content-Type': "application/json",
//         'Authorization': process.env.API_KEY,
//     };

//     try {
//         const response = await got.post(url, { json: params, headers: headers }).json();
//         output = `${response.choices[0].text}`;
//         res.send(output)
//     } catch (err) {
//         console.log(err);
//         res.send(err)
//     }
// };



var getResponse = async (prompt, temperature, max_tokens, top_p, frequency_penalty, presence_penalty,stop) => {

    const url = 'https://api.openai.com/v1/engines/davinci-codex/completions'
    const params = {
        "prompt": prompt,
        "temperature": temperature,
        "max_tokens": max_tokens,
        "top_p": top_p,
        "frequency_penalty": frequency_penalty,
        "presence_penalty": presence_penalty,
        "stop": [stop]
    };
    const headers = {
        'Content-Type': "application/json",
        'Authorization': process.env.API_KEY,
    };

    try {
        const response = await got.post(url, { json: params, headers: headers }).json();
        output = `${response.choices[0].text}`
        console.log(response)
        return output
    } catch (error) {
        return error
    }
};


module.exports = getResponse