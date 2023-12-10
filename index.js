const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey: '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',
});

const openai = new OpenAIApi(config);


const runPrompt = async () => {
    const prompt = 'Tell me a joke';

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 1,
    });
    console.log(response.data);
};

runPrompt()

// const { OpenAIApi } = require('openai');

// const openai = new OpenAIApi({
//     apiKey: "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",
// });

// const runPrompt = async () => {
//     const prompt = 'Tell me a joke';

//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: prompt,
//         max_tokens: 2048,
//         temperature: 1,
//     });
//     console.log(response.data);
// };

// runPrompt();

// "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"
// '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'

// const axios = require('axios');

// const apiKey = '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'; // Replace with your OpenAI API key
// const prompt = 'Tell me a joke';

// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': `Bearer ${apiKey}`,
// };

// const data = {
//   prompt,
//   max_tokens: 50, // Customize this value as needed
//   temperature: 1.0, // Customize this value as needed
//   model: 'text-davinci-003', // Choose the appropriate model
// };

// axios.post('https://api.openai.com/v1/engines/davinci/completions', data, { headers })
//   .then(response => {
//     console.log(response.data.choices[0].text);
//   })
//   .catch(error => {
//     console.error(error);
//   });
