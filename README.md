# chatgpt-api

- npm init
- npm install @azure/openai
- npm install dotenv

Result when comparing gpt3 without batching vs gpt3 with batching vs chatGPT
```
== Get completions Sample for GPT3 (without batching) ==
Microsoft was founded on April 4, 1975.
Microsoft is owned by Microsoft Corporation, a publicly traded company on the Nas
gpt3: 3.279s


== Get completions Sample for GPT3 (batching) ==
Microsoft was founded on April 4, 1975.
Microsoft is owned by its shareholders.
gpt3_batching: 892.11ms


== Get completions Sample for GPT35==
Microsoft was founded on April 4, 1975.
As an AI language model, I do not have access to the latest information or current ownership of Microsoft. However, as of 2021, the largest shareholder of Microsoft is the company's co-founder, Bill Gates, who still owns over 100 million shares, which is around 1.3% of the company. Other major shareholders include institutional investors, mutual funds, and exchange-traded funds.
chatgpt: 2.720s
```