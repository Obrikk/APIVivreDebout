const express = require('express')
const upload = require('../middleware/multer-config.js')
const verifyToken = require('../middleware/verifyToken.js')
const fs = require('fs');
const path = require('path');

let router = express.Router()

// router.get('', verifyToken, (req, res) => {
//     res.json({message:'routes des uploads'})
// })

router.get('', verifyToken, (req, res)=>{
    const userId= req.userId
    const userUploadsDir = path.join(__dirname, `../uploads/${userId}`);

    // Vérifier si le dossier de l'utilisateur existe
    if (!fs.existsSync(userUploadsDir)) {
        return res.status(404).json({ message: "Aucun document trouvé pour cet utilisateur." });
    }
    fs.readdir(userUploadsDir, (err, files) => {
        if (err) {
            console.error("Erreur lors de la lecture du dossier des téléchargements :", err);
            return res.status(500).json({ message: "Erreur serveur lors de la récupération des documents." });
        }

        // Mapper les noms de fichier en objets contenant le nom et le chemin du fichier
        const userFiles = files.map(file => {
            return {
                fileName: file,
                filePath: `/uploads/${userId}/${file}`
            };
        });

        // Retourner la liste des documents de l'utilisateur
        res.json(userFiles);
    });

})

router.post('',verifyToken, upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    res.json({ fileName: req.file.filename, filePath: `/uploads/${req.userId}/${req.file.filename}` });
  });

  router.delete('/:fileName', verifyToken, (req, res) => {
    const userId = req.userId;
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, `../uploads/${userId}/${fileName}`);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: "Le fichier spécifié n'existe pas." });
    }

    // Delete the file
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Erreur lors de la suppression du fichier :", err);
            return res.status(500).json({ message: "Erreur serveur lors de la suppression du fichier." });
        }
        res.json({ message: `Le fichier ${fileName} a été supprimé avec succès.` });
    });
});


module.exports = router