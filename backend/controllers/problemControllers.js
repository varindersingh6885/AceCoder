import Problem from '../models/problemModel.js'

export const getProblemBySearchTitle = async (req,res) => {
    const title = req.params.title
    try {
        const problem = await Problem.findOne({searchTitle : title},{solution : 0, testcases : 0})
        if(problem){
            res.json(problem)
        } else {
            res.status(404)
            res.json({error : 'problem does not exists'})
        }
        
    } catch (error) {
        res.status(500)
        res.json({error : 'Internal Server Error'})
    }
}

export const getProblemsAll = async (req, res) => {
    try {
        const problems = await Problem.find({})
        res.json(problems)
    } catch (error) {
        res.status(500)
        res.json({error : 'Internal Server Error'})
    }
}