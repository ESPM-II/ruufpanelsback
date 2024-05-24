const panelsCalculator = require('../utils/panelsCalculator');

exports.calculatePanels = (req, res) => {
    const { roofWidth, roofHeight, panelWidth, panelHeight} = req.body;
    if (!roofWidth || !roofHeight || !panelWidth || !panelHeight) {
        return res.status(400).json({ message: 'Debes proporcionar todas las dimensiones '});
    }

    const maxPanels = panelsCalculator(roofWidth, roofHeight, panelWidth, panelHeight);

    res.json({ maxPanels });
};