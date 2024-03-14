const express = require('express');
const router = express.Router();
const Model_Pemilik = require('../model/Model_Pemilik');

// Route untuk mendapatkan semua data pemilik
router.get('/', async function(req, res, next) {
    try {
        let rows = await Model_Pemilik.getAll();
        res.render('pemilik/index', { data: rows });
    } catch (error) {
        console.error('Error getting pemilik data: ' + error);
        res.status(500).send('Internal Server Error');
    }
});

// Route untuk menampilkan halaman tambah pemilik
router.get('/create', function(req, res, next) {
    res.render('pemilik/create');
});

// Route untuk menambahkan data pemilik
router.post('/store', async function(req, res, next) {
    try {
        let data = req.body;
        await Model_Pemilik.store(data);
        res.redirect("/pemilik");
    } catch (error) {
        console.error('Error adding pemilik data: ' + error);
        res.status(500).send('Internal Server Error');
    }
});

// Route untuk menampilkan halaman edit pemilik
router.get('/edit/:id', async function(req, res, next) {
    try {
        let id = req.params.id;
        let pemilik = await Model_Pemilik.getById(id);
        res.render('pemilik/edit', { pemilik });
    } catch (error) {
        console.error('Error getting pemilik data: ' + error);
        res.status(500).send('Internal Server Error');
    }
});

// Route untuk mengupdate data pemilik
router.post('/update/:id', async function(req, res, next) {
    try {
        let id = req.params.id;
        let data = req.body;
        await Model_Pemilik.update(id, data);
        res.redirect("/pemilik");
    } catch (error) {
        console.error('Error updating pemilik data: ' + error);
        res.status(500).send('Internal Server Error');
    }
});

// Route untuk menghapus data pemilik
router.get('/delete/:id', async function(req, res, next) {
    try {
        let id = req.params.id;
        await Model_Pemilik.delete(id);
        res.redirect("/pemilik");
    } catch (error) {
        console.error('Error deleting pemilik data: ' + error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
