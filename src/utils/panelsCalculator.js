function panelsCalculator(roofWidth, roofHeight, panelWidth, panelHeight) {
    let maxTotalPanels = 0;

    for(let horizontalCount = 0; horizontalCount <= Math.floor(roofWidth / panelWidth); horizontalCount++){
        for(let verticalCount = 0; verticalCount <= Math.floor(roofHeight / panelHeight); verticalCount++){
            const totalPanels = horizontalCount * verticalCount;

            if(totalPanels > maxTotalPanels && horizontalCount * panelWidth <= roofWidth && verticalCount * panelHeight <= roofHeight) {
                maxTotalPanels = totalPanels;
            }
        }
    }
    return maxTotalPanels;
}

module.exports = panelsCalculator;