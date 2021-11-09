const express = require('express')
const router = express.Router()
const getResponse = require("../../contorller/response")



router.post('/codeExplanation', async (req, res) => {
    const prompt = req.body.textareaExplain + "\n" + "Explanation of above code in Expert developer style for a 2nd grader student\n1." + req.body.doubt
    const language = req.body.language
    console.log(prompt)
    var result = await getResponse(prompt, 0.6, 1000, 1, 0.42, 0.26, "\"\"\"")
    var whichbutton = "button2"
    res.render('main', { textareaExplain2: result, textareaExplain: req.body.textareaExplain, language: language, whichbutton: whichbutton })
})

router.post('/bugFixer', async (req, res) => {
    const prompt = "\"\"\"This is a expert and smart bug hunter, it gives step by step solution of the prompt bug report\"\"\"\n\n\n\"\"\"prompt bug report\"\"\"\nValueError: Input 0 of layer sequential is incompatible with the layer: expected axis -1 of input shape to have value 156 but received input with shape (None, 103)\n    \n\"\"\"Step by step bug solving report for a expert developer (put ##### at the end)\"\"\"\n\"\"\"Chances of bug\"\"\"\n1.Check" + req.body.textareabugfix1 + "\n"
    const language = req.body.language
    console.log(prompt)
    var result = await getResponse(prompt, 0.64, 1000, 1, 0.55, 0, "##" )
    var whichbutton = "button5"
    res.render('main', { textareabugfix2: result, textareabugfix1: req.body.textareabugfix1, whichbutton: whichbutton})
})

router.post('/codeFlipper', async (req, res) => {
    const languageFrom = req.body.dropdown11
    const languageTo = req.body.dropdown12
    const prompt = "This is a Code translator which provides a optimal translation of codes.\n##from##Python :\ndef add(a,b):return a+b\n##to##Javascript:\nfunction add(a,b) {return a+b}**\n##from##python:\ndef subtraction(a,b):return a-b\n##to##haskel:\nsubtraction x y = x-y**\n##from##" + languageFrom + "\n" + req.body.textareaflipper1 + "\n##to##" + languageTo+"\n"
    console.log(prompt)
    var result = await getResponse(prompt, 150, 0, 1.0, 0, 0, "###")
    var whichbutton = "button1"

    res.render('main', { textarea2flipper2: result, textareaflipper1: req.body.textareaflipper1, whichbutton: whichbutton })
})

router.post('/complexity', async (req, res) => {
    const prompt = "def foo(n, k):\naccum = 0\nfor i in range(n):\n    for l in range(k):\n        accum += i\nreturn accum\n\"\"\"\nThe time complexity of this function is O(n*k)" + req.body.textareaComplexity + "\n" + "The time complexity of this code is "
    const language = req.body.language
    console.log(language)
    var result = await getResponse(prompt,0, 715, 1, 1.58, 0.98, "<\"")
    var whichbutton = "button3"
    res.render('main', { textareaComplexity2: result, textareaComplexity: req.body.textareaComplexity, whichbutton: whichbutton })
})

router.post('/sqlQuery', async (req, res) => {
    const prompt = "### Postgres SQL tables, with their properties:\n#\n# Employee(id, name, department_id)\n# Department(id, name, address)\n# Salary_Payments(id, employee_id, amount, date)\n#\n### A query to list the names of the departments which employed more than 10 employees in the last 3 months\nSELECT DISTINCT d.name\nFROM Department d\nJOIN Employee e\nON d.id = e.department_id\nJOIN Salary_Payments s\nON e.id = s.employee_id\nWHERE s.date > CURRENT_DATE - INTERVAL \'3 months\'\nGROUP BY d.name\nHAVING COUNT(e.id) > 10\n\n### " + req.body.textareasql
    console.log(prompt)
    var result = await getResponse(prompt, 0 , 400, 1, 0.42, 0.26, "###")
    var whichbutton = "button4"
    res.render('main', { textareasql2: result, textareasql: req.body.textareasql, whichbutton: whichbutton })
})



module.exports = router
