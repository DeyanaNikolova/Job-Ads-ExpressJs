const router = require('express').Router();
const authService = require('../services/authService');
const { isAuthorized } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');


router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { email, password, repass, description } = req.body;
    try{
     const token = await authService.register( email, password, repass, description);
     res.cookie('auth', token);
     res.redirect('/');
     
    } catch(error){
      res.status(400).render('auth/register', { error: getErrorMessage(error) });
    }
    // TODO login authomatically
    
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');

    } catch (error) {
        return res.status(404).render('auth/login', { error: getErrorMessage(error) });
    }
});

router.get('/logout', isAuthorized, (req, res) => {

    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router