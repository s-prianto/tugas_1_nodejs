//initialize express router
let router = require('express').Router();

//set default API response
router.get('/',function(req,res){
	res.json({
		nama:"Richard Muhammad",
		tanggal_lahir:"14 Januari 1994",
		jenis_kelamin:"Laki-laki",
		Hobi:"Membaca Buku"
	});
});

//exports API
module.exports = router;
