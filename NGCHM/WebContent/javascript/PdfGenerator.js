//Define Namespace for NgChm PdfGenerator
NgChm.createNS('NgChm.PDF');

NgChm.PDF.boxCanvasWidth;
NgChm.PDF.boxCanvasHeight;
NgChm.PDF.colDendroWidth;
NgChm.PDF.colDendroHeight;
NgChm.PDF.rowDendoWidth;
NgChm.PDF.rowDendroHeight;
NgChm.PDF.customFont = false;
NgChm.PDF.isWidget = false;
NgChm.PDF.mdaLogo = "data:image/png;base64,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";

/**********************************************************************************
 * FUNCTION - openPdfPrefs: This function is called when the user clicks the pdf
 * button on the menu bar.  The PDF preferences panel is then launched
 **********************************************************************************/
NgChm.PDF.openPdfPrefs = function(e) {
	NgChm.UHM.closeMenu();
	maxRows = 0;
	NgChm.UHM.userHelpClose();
	var prefspanel = document.getElementById('pdfPrefsPanel');
	var headerpanel = document.getElementById('mdaServiceHeader');
	//Add prefspanel table to the main preferences DIV and set position and display
	prefspanel.style.top = headerpanel.offsetTop + 15;
	prefspanel.style.display="inherit";
	document.getElementById("pdfInputFont"). value = parseInt(document.getElementsByClassName("DynamicLabel")[0].style["font-size"]);
}

/**********************************************************************************
 * FUNCTION - getPDF: This function is called when the "create pdf" button is pressed.
 * It will check the checkboxes/radio buttons to see how the PDF is to be created using
 * the isChecked function. for a full list of jsPDF functions, visit here:
 * https://mrrio.github.io/jsPDF/doc/symbols/jsPDF.html#setLineCap
 **********************************************************************************/
NgChm.PDF.getPDF = function() {

	if (document.getElementById("pdfInputFont").value < 1 || document.getElementById("pdfInputFont").value > 36){
		document.getElementById('pdfErrorMessage').style.display="inherit";
		return;
	} else {
		document.getElementById('pdfErrorMessage').style.display="none";
	}
	// close the PDF menu when you download
	NgChm.PDF.pdfCancelButton();	
	var mapsToShow = isChecked("pdfInputSummaryMap") ? "S" : isChecked("pdfInputDetailMap") ? "D" : "B";
	var paperSize = [792,612];
	if (document.getElementById("pdfPaperSize").value == "A4") {
		paperSize = [842,595];
	} else if (document.getElementById("pdfPaperSize").value == "A3") {
		paperSize = [1224,792];
	}
	var doc = isChecked("pdfInputPortrait") ? new jsPDF("p","pt",paperSize) :new jsPDF("l","pt",paperSize); // landscape or portrait?  210 × 297  2.83465  595x842
	var customFont = NgChm.PDF.customFont;
	NgChm.PDF.customFont = false; // reset this variable once it has been referenced
	var maxFontSize = Number(document.getElementById("pdfInputFont").value);
	var classBarTitleSize = customFont ? maxFontSize : 10;
	var classBarLegendTextSize = customFont ? maxFontSize : 9;
	doc.setFont(document.getElementById("pdfFontStyle").value);
	var pageHeight = doc.internal.pageSize.height;
	var pageWidth = doc.internal.pageSize.width;
	var rowDendroConfig = NgChm.heatMap.getRowDendroConfig();
	var colDendroConfig = NgChm.heatMap.getColDendroConfig();
	
	// Convert longest label units to actual length (11 is the max font size of the labels)
	// these will be the bottom and left padding space for the detail Heat Map
	var allLabels = document.getElementsByClassName("DynamicLabel");
	var longestRowLabelUnits = 1, longestColLabelUnits = 1;
	for (var i = 0; i < allLabels.length; i++){ // go through all the labels and find the one that takes the most space
		var label = allLabels[i];
		if (label.getAttribute('axis') == "Row" || label.getAttribute('axis') == "ColumnCovar"){
			longestRowLabelUnits = Math.max(doc.getStringUnitWidth(label.innerHTML),longestRowLabelUnits);
		} else {
			longestColLabelUnits = Math.max(doc.getStringUnitWidth(label.innerHTML),longestColLabelUnits);
		}
	} 
	longestColLabelUnits += longestColLabelUnits*maxFontSize+30; //Set initially to maximum font sizing for rough page sizing
	longestRowLabelUnits += longestRowLabelUnits*maxFontSize+30;
	
	var rowTopItems = NgChm.SUM.rowTopItems;
	var colTopItems = NgChm.SUM.colTopItems;
	var longestRowTopItems = 0;
	var longestColTopItems = 0;
	for (var i = 0; i < rowTopItems.length; i++){
		longestRowTopItems = Math.max(doc.getStringUnitWidth(rowTopItems[i]),longestRowTopItems);
	}
	longestRowTopItems *= maxFontSize;
	for (var i = 0; i < colTopItems.length; i++){
		longestColTopItems = Math.max(doc.getStringUnitWidth(colTopItems[i]),longestColTopItems);
	}
	longestColTopItems *= maxFontSize;
	
	// Header
	var header = document.getElementById('mdaLogo');
	var headerHeight = header.clientHeight + 5;
	var rowDendroScale = parseInt(NgChm.heatMap.getRowDendroConfig().height)/100;
	var colDendroScale = parseInt(NgChm.heatMap.getColDendroConfig().height)/100;

	// These are the variables that we will be using repeatedly to place items
	var paddingLeft = 10;
	var paddingTop = headerHeight+15; 
	var detImgH = pageHeight - paddingTop - longestColLabelUnits - 2*paddingLeft;
	var detImgW = pageWidth - longestRowLabelUnits - 2*paddingLeft;
	var sumImgW = pageWidth - 2*paddingLeft  //width of available space for heatmap, class bars, and dendro
	var sumImgH = pageHeight - paddingTop - paddingLeft; //height of available space for heatmap, class bars, and dendro
	var detImgL = paddingLeft;
	var rowDendroWidth = (sumImgW/5)*rowDendroScale;
	var colDendroHeight = (sumImgH/5)*colDendroScale;
	var rowDendroPctg = 1 - (rowDendroWidth/sumImgW);
	var colDendroPctg = 1 - (colDendroHeight/sumImgH);
	var topItemsWidth = 10;
	var topItemsHeight = 10;
	var sumMapH = sumImgH*colDendroPctg - longestColTopItems - topItemsHeight; //width of summary heatmap (and class bars)
	var sumMapW = sumImgW*rowDendroPctg - longestRowTopItems - topItemsWidth; //height of summary heatmap (and class bars)
	var colClassHeight = sumMapH*(NgChm.SUM.calculateSummaryTotalClassBarHeight("col")/NgChm.SUM.canvas.height);
	var rowClassWidth = sumMapW*(NgChm.SUM.calculateSummaryTotalClassBarHeight("row")/NgChm.SUM.canvas.width);
	
	var detMapH = detImgH*colDendroPctg;
	var detMapW = detImgW*rowDendroPctg;
	var detColClassHeight = detMapH*(NgChm.SUM.calculateSummaryTotalClassBarHeight("col")/NgChm.DET.canvas.height);
	var detRowClassWidth = detMapW*(NgChm.SUM.calculateSummaryTotalClassBarHeight("row")/NgChm.DET.canvas.width);

	// Create and set the fontSize using the minimum of the calculated sizes for row and column labels
	// Calculate the font size for rows and columns. Take the lowest of the two.  If the result is greater than 11 set the font to 11.  If the result is less than 6 set the font to 6.
	var colLabelAdj = 0
	
	var colclassctr = NgChm.heatMap.getColClassificationOrder("show").length
	var theClassFont = Math.floor((colClassHeight-(colclassctr-2))/colclassctr);
	var theFont = maxFontSize;
	doc.setFontSize(maxFontSize);
	
	// Scale canvases for PDF page size and Redraw because otherwise they can show up blank
	resizeCanvas(sumMapW, sumMapH, rowDendroWidth, colDendroHeight);
	NgChm.SEL.updateSelection(); 
	
	
	//Dimensions of summary canvas are sometimes a poor match for the size it will be in the PDF.
	//Create a temporary canvas matching the PDF summary image dimensions, turn off image smoothing
	//and copy the current summary canvas to the temporary one.  This will resize the image without
	//smoothing to the target size so the PDF viewer will not need to stretch/compress the image
	//much.  Prevents blurry summary on some heat maps.
	var tmpCan = document.createElement('canvas');
	tmpCan.width = sumMapW;
	tmpCan.height = sumMapH;
	var destCtx = tmpCan.getContext("2d");
	destCtx.mozImageSmoothingEnabled = false;
	destCtx.imageSmoothingEnabled = false;
	destCtx.scale(sumMapW/NgChm.SUM.canvas.width,sumMapH/NgChm.SUM.canvas.height);
	destCtx.drawImage(NgChm.SUM.canvas,0,0);
	
	
	// Canvas elements need to be converted to DataUrl to be loaded into PDF
	var sumImgData = tmpCan.toDataURL('image/png');
	var sumRowDendroData = document.getElementById("row_dendro_canvas").toDataURL('image/png');
	var sumColDendroData = document.getElementById("column_dendro_canvas").toDataURL('image/png');
	var sumRowTopItemsData = document.getElementById("summary_row_top_items_canvas").toDataURL('image/png');
	var sumColTopItemsData = document.getElementById("summary_col_top_items_canvas").toDataURL('image/png');
	var detRowDendroData = document.getElementById("detail_row_dendro_canvas").toDataURL('image/png');
	var detColDendroData = document.getElementById("detail_column_dendro_canvas").toDataURL('image/png');
	var detImgData = NgChm.DET.canvas.toDataURL('image/png');
	var sumBoxImgData = NgChm.SUM.boxCanvas.toDataURL('image/png');
	var detBoxImgData = NgChm.DET.boxCanvas.toDataURL('image/png');
	
	var colTICanvas = document.getElementById("summary_col_top_items_canvas");
	var rowTICanvas = document.getElementById("summary_row_top_items_canvas");
	var topItems = document.getElementsByClassName("topItems");
	for (var i = 0; i < topItems.length; i++){
		var item = topItems[i];
		if (item.axis == "row"){
			var left = paddingLeft+rowDendroWidth + sumMapW+topItemsWidth;
			var topOffset = item.offsetTop - rowTICanvas.offsetTop;
			var topPercentage = topOffset/rowTICanvas.height;
			doc.text(left, paddingTop+colDendroHeight + colClassHeight + topPercentage*rowTICanvas.height + maxFontSize, item.innerHTML);
		} else {
			var top = paddingTop+colDendroHeight+sumMapH+topItemsHeight;
			var leftOffset = item.offsetLeft + item.offsetWidth/2 - colTICanvas.offsetLeft;
			var leftPercentage = leftOffset/colTICanvas.width;
			doc.text(paddingLeft + rowDendroWidth + rowClassWidth + leftPercentage*colTICanvas.width-2, top, item.innerHTML, null, 270);
		}
	}

	//Put the canvases back the way we found them.
	restoreCanvas();

	// Create first page header
	createHeader(theFont);
	
	// Draw the heat map images (based upon user parameter selections)
	if (mapsToShow == "D") {
		var rowDendroLeft = paddingLeft;
		var imgLeft = paddingLeft+rowDendroWidth;
		var colDendroTop = paddingTop;
		var imgTop = paddingTop+colDendroHeight;
		if (rowDendroConfig.show !== 'ALL') {
			imgLeft = paddingLeft;
			detMapW = detImgW;
			detRowClassWidth = detMapW*(NgChm.SUM.calculateSummaryTotalClassBarHeight("row")/NgChm.DET.canvas.width);
			rowDendroWidth = 0;
		}
		if (colDendroConfig.show !== 'ALL') {
			imgTop = paddingTop;
			detMapH = detImgH;
			detColClassHeight = detMapH*(NgChm.SUM.calculateSummaryTotalClassBarHeight("col")/NgChm.DET.canvas.height);
			colDendroHeight = 0;
		}
		resizeDetailDendroCanvas(detMapW,detMapH, rowDendroWidth,colDendroHeight);
		var detRowDendroData = document.getElementById("detail_row_dendro_canvas").toDataURL('image/png');
		var detColDendroData = document.getElementById("detail_column_dendro_canvas").toDataURL('image/png');
		if (rowDendroConfig.show === 'ALL') {
			doc.addImage(detRowDendroData, 'PNG', rowDendroLeft, imgTop+detColClassHeight, rowDendroWidth, detMapH-detColClassHeight);
		}
		if (colDendroConfig.show === 'ALL') {
			doc.addImage(detColDendroData, 'PNG',imgLeft+detRowClassWidth, colDendroTop, detMapW-detRowClassWidth,colDendroHeight);
		}
		doc.addImage(detImgData, 'PNG', imgLeft, imgTop, detMapW,detMapH);
		doc.addImage(detBoxImgData, 'PNG', imgLeft, imgTop, detMapW,detMapH);
	} else {
		var rowDendroLeft = paddingLeft;
		var imgLeft = paddingLeft+rowDendroWidth;
		var colDendroTop = paddingTop;
		var imgTop = paddingTop+colDendroHeight;
		if (rowDendroConfig.show === 'NONE') {
			imgLeft = paddingLeft;
		} else {
			doc.addImage(sumRowDendroData, 'PNG', rowDendroLeft, imgTop+colClassHeight, rowDendroWidth, sumMapH-colClassHeight);
		}
		if (colDendroConfig.show === 'NONE') {
			imgTop = paddingTop;
		} else {
			doc.addImage(sumColDendroData, 'PNG', imgLeft+rowClassWidth, colDendroTop, sumMapW-rowClassWidth,colDendroHeight);
		}
		doc.addImage(sumImgData, 'PNG', imgLeft, imgTop, sumMapW,sumMapH);
		
		// Add top item marks
		doc.addImage(sumRowTopItemsData, 'PNG', imgLeft + sumMapW, imgTop + colClassHeight, topItemsWidth,sumMapH-colClassHeight); 
		doc.addImage(sumColTopItemsData, 'PNG', imgLeft + rowClassWidth, imgTop + sumMapH, sumMapW-rowClassWidth,topItemsHeight);
		
		// If showing both sum and det, add the box to the summary image, add a page, print the header, and add the detail image to the PDF
		if (mapsToShow === 'B') {
			doc.addImage(sumBoxImgData, 'PNG', imgLeft, imgTop, sumMapW,sumMapH);
			doc.addPage();
			createHeader(theFont);
			var rowDendroLeft = paddingLeft;
			var imgLeft = paddingLeft+rowDendroWidth;
			var colDendroTop = paddingTop;
			var imgTop = paddingTop+colDendroHeight;
			if (rowDendroConfig.show !== 'ALL') {
				imgLeft = paddingLeft;
				detMapW = detImgW;
				detRowClassWidth = detMapW*(NgChm.SUM.calculateSummaryTotalClassBarHeight("row")/NgChm.DET.canvas.width);
				rowDendroWidth = 0;
			}
			if (colDendroConfig.show !== 'ALL') {
				imgTop = paddingTop;
				detMapH = detImgH;
				detColClassHeight = detMapH*(NgChm.SUM.calculateSummaryTotalClassBarHeight("col")/NgChm.DET.canvas.height);
				colDendroHeight = 0;
			}
			
			resizeDetailDendroCanvas(detMapW,detMapH,rowDendroWidth,colDendroHeight);
			var detRowDendroData = document.getElementById("detail_row_dendro_canvas").toDataURL('image/png');
			var detColDendroData = document.getElementById("detail_column_dendro_canvas").toDataURL('image/png');

			if (rowDendroConfig.show === 'ALL') {
				doc.addImage(detRowDendroData, 'PNG', rowDendroLeft, imgTop+detColClassHeight, rowDendroWidth, detMapH-detColClassHeight);
			}
			if (colDendroConfig.show === 'ALL') {
				doc.addImage(detColDendroData, 'PNG',imgLeft+detRowClassWidth, colDendroTop, detMapW-detRowClassWidth,colDendroHeight);
			}
			doc.addImage(detImgData, 'PNG', imgLeft, imgTop, detMapW,detMapH);
			doc.addImage(detBoxImgData, 'PNG', imgLeft, imgTop, detMapW,detMapH);
		} else {
			NgChm.SUM.resetBoxCanvas();
			sumBoxImgData = NgChm.SUM.boxCanvas.toDataURL('image/png');
			doc.addImage(sumBoxImgData, 'PNG', imgLeft, imgTop, sumMapW,sumMapH);
			NgChm.SUM.drawLeftCanvasBox();
		}
	}

	// Add row and column labels to the PDF
	if (mapsToShow !== "S"){
		var detClient2PdfWRatio = NgChm.DET.canvas.clientWidth/detMapW;  // scale factor to place the labels in their proper locations
		var detClient2PdfHRatio = NgChm.DET.canvas.clientHeight/detMapH;
		var headerSize = 0;
		var colHeight = NgChm.DET.calculateTotalClassBarHeight("column") + colDendroHeight;
		if (colHeight > 0) {
			headerSize += detImgH * (colHeight / (NgChm.DET.dataViewHeight + colHeight));
		}
		// Get selection color for current datalayer to be used in highlighting selected labels
		var dataLayers = NgChm.heatMap.getDataLayers();
		var colorMap = NgChm.heatMap.getColorMapManager().getColorMap("data",NgChm.SEL.currentDl);
		var layer = dataLayers[NgChm.SEL.currentDl];
		var selectedColor = colorMap.getHexToRgba(layer.selection_color);
		var rowLabels = 0;

		// Draw selection boxes first (this way they will not overlap text)
		for (var i = 0; i < allLabels.length; i++){
			var label = allLabels[i];
			if (label.getAttribute("axis") == "Row"){
				if (NgChm.DET.labelIndexInSearch(NgChm.SEL.currentRow+i,"Row")) {
					doc.setFillColor(selectedColor.r, selectedColor.g, selectedColor.b);
					doc.rect((label.offsetLeft-NgChm.DET.canvas.offsetLeft)/detClient2PdfWRatio+rowDendroWidth+paddingLeft, (label.offsetTop-NgChm.DET.canvas.offsetTop)/detClient2PdfHRatio+paddingTop+colDendroHeight, longestRowLabelUnits+2, theFont,'F');
				}
				rowLabels++;
			} else if (label.getAttribute("axis") == "Column") {
				if (NgChm.DET.labelIndexInSearch(NgChm.SEL.currentCol+i-rowLabels,"Column")) {
					doc.setFillColor(selectedColor.r, selectedColor.g, selectedColor.b);
					doc.rect((label.offsetLeft-NgChm.DET.canvas.offsetLeft)/detClient2PdfWRatio+rowDendroWidth-2, (label.offsetTop-NgChm.DET.canvas.offsetTop)/detClient2PdfHRatio+paddingTop+colDendroHeight,  theFont+2.5, longestColLabelUnits+2,'F'); 
				}
			}
		}
		
		// Draw labels 
		for (var i = 0; i < allLabels.length; i++){
			var label = allLabels[i];
			if ((label.getAttribute("axis") == "Row") || (label.getAttribute("axis") == "ColumnCovar")) {
				if (label.id.indexOf("legendDet") > -1) {
//					doc.text((label.offsetLeft+(label.clientWidth*1.5-NgChm.DET.canvas.offsetLeft))/detClient2PdfWRatio+rowDendroWidth,label.offsetTop/detClient2PdfHRatio+paddingTop, label.innerHTML, null, 270);
					doc.text((label.offsetLeft-NgChm.DET.canvas.offsetLeft)/detClient2PdfWRatio+rowDendroWidth+paddingLeft, (label.offsetTop-NgChm.DET.canvas.offsetTop)/detClient2PdfHRatio+paddingTop+colDendroHeight+theFont*.75-1, label.innerHTML, null);
				} else {
					doc.text((label.offsetLeft-NgChm.DET.canvas.offsetLeft)/detClient2PdfWRatio+rowDendroWidth+paddingLeft, (label.offsetTop-NgChm.DET.canvas.offsetTop)/detClient2PdfHRatio+paddingTop+colDendroHeight+theFont*.75, label.innerHTML, null);
//					doc.text((label.offsetLeft-NgChm.DET.canvas.offsetLeft)/detClient2PdfWRatio+rowDendroWidth, (label.offsetTop-NgChm.DET.canvas.offsetTop)/detClient2PdfHRatio+paddingTop+colDendroHeight, label.innerHTML, null, 270);
				}
				
//				doc.text((label.offsetLeft-NgChm.DET.canvas.offsetLeft)/detClient2PdfWRatio+rowDendroWidth+paddingLeft, (label.offsetTop-NgChm.DET.canvas.offsetTop)/detClient2PdfHRatio+paddingTop+colDendroHeight+theFont*.75, label.innerHTML, null);
			} else if ((label.getAttribute("axis") == "Column") || (label.getAttribute("axis") == "RowCovar")) {
				if (label.id.indexOf("legendDet") > -1) {
					doc.text((label.offsetLeft-NgChm.DET.canvas.offsetLeft)/detClient2PdfWRatio+rowDendroWidth+paddingLeft, (label.offsetTop-NgChm.DET.canvas.offsetTop)/detClient2PdfHRatio+paddingTop+colDendroHeight, label.innerHTML, null, 270);
//					doc.text((label.offsetLeft+(label.clientWidth*1.5-NgChm.DET.canvas.offsetLeft))/detClient2PdfWRatio+rowDendroWidth,label.offsetTop/detClient2PdfHRatio+paddingTop, label.innerHTML, null, 270);
				} else {
					doc.text((label.offsetLeft-NgChm.DET.canvas.offsetLeft)/detClient2PdfWRatio+rowDendroWidth, (label.offsetTop-NgChm.DET.canvas.offsetTop)/detClient2PdfHRatio+paddingTop+colDendroHeight, label.innerHTML, null, 270);
				}
			} 
 
		}
	}
	
	// Setup for class bar legends
	var classBarHeaderSize = 12; // these are font sizes
	var classBarHeaderHeight = classBarHeaderSize+10; 
	var classBarFigureW = 150; // figure dimensions, unless discrete with 15+ categories
	var classBarFigureH = 0;  
	var topSkip = classBarFigureH + classBarHeaderSize+10; 
	var condenseClassBars = isChecked('pdfInputCondensed');
	paddingLeft = 5;
	paddingTop = headerHeight+classBarHeaderSize + 10; // reset the top and left coordinates
	
	// Draw row class bar legends
	var rowClassBarData = NgChm.heatMap.getRowClassificationData();
	var colClassBarData = NgChm.heatMap.getColClassificationData();
	var rowClassBarConfig = NgChm.heatMap.getRowClassificationConfig();
	var colClassBarConfig = NgChm.heatMap.getColClassificationConfig();
	
	var rowBarsToDraw = [];
	var colBarsToDraw = [];
	if (isChecked('pdfInputColumn')) {
		colBarsToDraw = NgChm.heatMap.getColClassificationOrder("show");
	}
	if (isChecked('pdfInputRow')) {
		rowBarsToDraw = NgChm.heatMap.getRowClassificationOrder("show");
	}
	var topOff = paddingTop + classBarTitleSize + 5;
	
	// adding the data matrix distribution plot here
	var sectionHeader = "Data Matrix Distribution"
	doc.addPage();
	createHeader(theFont);
	doc.setFontSize(classBarHeaderSize);
	doc.setFontType("bold");
	doc.text(10, paddingTop, sectionHeader , null);
	doc.setFontType("normal");
	var leftOff = 20;
	getDataMatrixDistributionPlot();
	
	var sectionHeader = "Row Covariate Bar Legends"  
	if (rowBarsToDraw.length > 0){
//		doc.addPage();
		leftOff = 20; // ...reset leftOff...
		topSkip  = classBarFigureH + classBarHeaderSize + classBarTitleSize + 20; // return class bar height to original value in case it got changed in this row
		topOff += topSkip; // ... and move the next figure to the line below
		createHeader(theFont);
		doc.setFontSize(classBarHeaderSize);
		doc.setFontType("bold");
		doc.text(10, topOff, sectionHeader , null);
		doc.setFontType("normal");
		var leftOff = 20;
		classBarFigureH = 0;   
		topOff += classBarTitleSize + 5;
		for (var i = 0; i < rowBarsToDraw.length;i++){
			var key = rowBarsToDraw[i];
			var colorMap = NgChm.heatMap.getColorMapManager().getColorMap("row", key);
			doc.setFontSize(classBarTitleSize);
			if (rowClassBarConfig[key].color_map.type === 'discrete') {
				getBarGraphForDiscreteClassBar(key, 'row'); 
			} else {
				getBarGraphForContinuousClassBar(key, 'row');
			}
		}
	}
	sectionHeader = "Column Covariate Bar Legends"
	// Draw column class bar legends
	if (colBarsToDraw.length > 0){
		leftOff = 20; // ...reset leftOff...
		topSkip  = classBarFigureH + classBarHeaderSize + classBarTitleSize + 20; // return class bar height to original value in case it got changed in this row
		topOff += topSkip; // ... and move the next figure to the line below
		doc.setFontSize(classBarHeaderSize);
		doc.setFontType("bold");
		doc.text(10, topOff, sectionHeader , null);
		doc.setFontType("normal");
		var leftOff=20;
		classBarFigureH = 0;   
		topOff += classBarTitleSize + 5;
		for (var i = 0; i < colBarsToDraw.length;i++){
			var key = colBarsToDraw[i];
			doc.setFontSize(classBarTitleSize);
			if (colClassBarConfig[key].color_map.type === 'discrete') {
				getBarGraphForDiscreteClassBar(key, 'col');
			} else {
				getBarGraphForContinuousClassBar(key, 'col');
			}
		}
	}
	NgChm.DET.canvas.focus();
//	NgChm.SEL.updateSelection();
	NgChm.SUM.summaryResize();
	NgChm.DET.detailResize();
	// TODO: in case there is an empty page after the class bar legends, delete it
	doc.save( NgChm.heatMap.getMapInformation().name + '.pdf');
	
	function setClassBarFigureH(threshCount, type, isMissing) {  
		var bars = 9; //Set bar default to continuous with 9 bars
		if (type === 'discrete') {
			bars = threshCount; //Set bars to threshold count 
		}
		bars += isMissing; // Add a bar if missing values exist
		var calcHeight = bars * (classBarLegendTextSize+3); //number of bars multiplied by display height
		if (calcHeight > classBarFigureH) {
			classBarFigureH = calcHeight;
		}
	}
	
	//==================//
	// HELPER FUNCTIONS //
	//==================//
	
	// makes the MDAnderson logo, the HM name, and the red divider line at the top of each page
	function createHeader(theFont, contText) {
		//If standard viewer version OR file viewer version show MDA logo 
		if ((NgChm.PDF.isWidget === false) || (typeof isNgChmAppViewer !== 'undefined')) {
			doc.addImage(NgChm.PDF.mdaLogo, 'PNG',5,5,header.clientWidth,header.clientHeight);
			// Center Heat Map name in header whitespace to left of logo and step down the font if excessively long.
			if (NgChm.heatMap.getMapInformation().name.length > 60) {
				doc.setFontSize(10);
				doc.text(pageWidth/1.7 - doc.getStringUnitWidth(NgChm.heatMap.getMapInformation().name)*10/2, headerHeight - 10, NgChm.heatMap.getMapInformation().name, null);
			} else {
				doc.setFontSize(20);
				doc.text(pageWidth/1.7 - doc.getStringUnitWidth(NgChm.heatMap.getMapInformation().name)*20/2, headerHeight - 10, NgChm.heatMap.getMapInformation().name, null);
			}
			doc.setFontType("bold");
			doc.setFillColor(255,0,0);
			doc.setDrawColor(255,0,0);
			doc.rect(5, header.clientHeight+10, pageWidth-10, 2, "FD");
			doc.setFontSize(theFont);
			if (typeof contText !== 'undefined') {
				doc.setFontSize(classBarHeaderSize);
				doc.text(10, paddingTop, contText, null);
			}
		} else {
			// If widgetized viewer exclude MDA logo and show compressed hear
			doc.setFontSize(8);
			doc.setFontType("bold");
			doc.text(10,10,"NG-CHM Heat Map: "+ NgChm.heatMap.getMapInformation().name,null);
			doc.setFillColor(255,0,0);
			doc.setDrawColor(255,0,0);
			doc.rect(0, 15, pageWidth-10, 2, "FD");
			doc.setFontSize(theFont);
		}
		doc.setFontType("normal");
	}
	
	/**********************************************************************************
	 * FUNCTION - getDataMatrixDistributionPlot: create the distribution plot
	 **********************************************************************************/
	function getDataMatrixDistributionPlot(){
		// function ripped from UPM used in the gear panel
		var currentDl = NgChm.SEL.currentDl;
		var cm = NgChm.heatMap.getColorMapManager().getColorMap("data",currentDl);
		var thresholds = cm.getThresholds();
		var numBreaks = thresholds.length;
		var highBP = parseFloat(thresholds[numBreaks-1]);
		var lowBP = parseFloat(thresholds[0]);
		var diff = highBP-lowBP;
		var bins = new Array(10+1).join('0').split('').map(parseFloat); // make array of 0's to start the counters
		var breaks = new Array(9+1).join('0').split('').map(parseFloat);
		for (var i=0; i <breaks.length;i++){
			breaks[i]+=lowBP+diff/(breaks.length-1)*i; // array of the breakpoints shown in the preview div
			breaks[i]=parseFloat(breaks[i].toFixed(2));
		}
		var numCol = NgChm.heatMap.getNumColumns(NgChm.MMGR.DETAIL_LEVEL);
		var numRow = NgChm.heatMap.getNumRows(NgChm.MMGR.DETAIL_LEVEL)
		var count = 0;
		var nan=0;
		for (var i=0; i<numCol;i++){
			for(var j=0;j<numRow;j++){
				count++;
				var val = NgChm.heatMap.getValue(NgChm.MMGR.DETAIL_LEVEL,j,i);
				if (isNaN(val) || val>=NgChm.SUM.maxValues){ // is it Missing value?
					nan++;
				} else if (val <= NgChm.SUM.minValues){ // is it a cut location?
					continue;
				}
				if (val <= lowBP){
					bins[0]++;
					continue;
				} else if (highBP < val){
					bins[bins.length-1]++;
					continue;
				}
				for (var k=0;k<breaks.length;k++){
					if (breaks[k]<=val && val < breaks[k+1]){
						bins[k+1]++;
						break;
					}
				}
			}
		}
		var total = 0;
		var binMax = nan;
		for (var i=0;i<bins.length;i++){
			if (bins[i]>binMax)
				binMax=bins[i];
			total+=bins[i];
		}
		
		var leftOff = 20;
		var bartop = topOff+5;
		var threshMaxLen = getThreshMaxLength(thresholds,classBarLegendTextSize);
		var missingCount=0;
		
		var barHeight = classBarLegendTextSize + 3;
		for (var j = 0; j < breaks.length; j++){ // draw all the bars within the break points
			var rgb = cm.getColor(breaks[j]);
			doc.setFillColor(rgb.r,rgb.g,rgb.b);
			doc.setDrawColor(0,0,0);
			value = bins[j];
			if (isNaN(value) || value == undefined){
				value = 0;
			}
			if (condenseClassBars){ // square
				var barW = 10;
				doc.rect(leftOff + threshMaxLen, bartop, barW, barHeight, "FD"); // make the square
				doc.rect(leftOff + threshMaxLen-2, bartop+barHeight, 2, 1, "FD"); // make break bar
				doc.setFontSize(classBarLegendTextSize);
				doc.text(leftOff + threshMaxLen - doc.getStringUnitWidth(breaks[j].toString())*classBarLegendTextSize - 4, bartop + classBarLegendTextSize + barHeight/2, breaks[j].toString() , null);
				doc.text(leftOff +barW + threshMaxLen + 10, bartop + classBarLegendTextSize, "n = " + value , null);
			} else { // histogram
				var barW = (value/binMax*classBarFigureW)*.65;  //scale bars to fit page
				doc.rect(leftOff + threshMaxLen, bartop, barW, barHeight, "FD"); // make the histo bar
				doc.rect(leftOff + threshMaxLen-2, bartop+barHeight, 2, 1, "FD"); // make break bar
				doc.setFontSize(classBarLegendTextSize);
				doc.text(leftOff + threshMaxLen - doc.getStringUnitWidth(breaks[j].toString())*classBarLegendTextSize - 4, bartop + classBarLegendTextSize + barHeight/2, breaks[j].toString() , null);
				doc.text(leftOff + threshMaxLen +barW + 5, bartop + classBarLegendTextSize, "n = " + value , null);
			}
			missingCount -= value; 
			bartop+=barHeight; // adjust top position for the next bar
		}
		// draw the last bar in the color plot
		var rgb = cm.getColor(breaks[breaks.length-1]);
		doc.setFillColor(rgb.r,rgb.g,rgb.b);
		doc.setDrawColor(0,0,0);
		value = bins[bins.length-1];
		if (isNaN(value) || value == undefined){
			value = 0;
		}
		if (condenseClassBars){ // square
			var barW = 10;
			doc.rect(leftOff + threshMaxLen, bartop, barW, barHeight, "FD"); // make the square
			doc.setFontSize(classBarLegendTextSize);
			doc.text(leftOff +barW + threshMaxLen + 10, bartop + classBarLegendTextSize, "n = " + value , null);
		} else { // histogram
			var barW = (value/binMax*classBarFigureW)*.65;  //scale bars to fit page
			doc.rect(leftOff + threshMaxLen, bartop, barW, barHeight, "FD"); // make the histo bar
			doc.setFontSize(classBarLegendTextSize);
			doc.text(leftOff + threshMaxLen +barW + 5, bartop + classBarLegendTextSize, "n = " + value , null);
		}
		missingCount -= value; 
		bartop+=barHeight; // adjust top position for the next bar
		// Draw missing values bar IF missing values > 0
		missingCount = Math.max(0,nan); // just in case missingCount goes negative...
		if (missingCount > 0) {
			foundMissing = 1;
			var rgb = colorMap.getColor("Missing");
			doc.setFillColor(rgb.r,rgb.g,rgb.b);
			doc.setDrawColor(0,0,0);
			var barW = missingCount/binMax*classBarFigureW;
			doc.rect(leftOff + threshMaxLen, bartop, barW, barHeight, "FD");
			doc.setFontSize(classBarLegendTextSize);
			doc.text(leftOff + threshMaxLen - doc.getStringUnitWidth("Missing Value")*classBarLegendTextSize - 4, bartop + classBarLegendTextSize, "Missing Value" , null);
			doc.text(leftOff + threshMaxLen +barW + 5, bartop + classBarLegendTextSize, "n = " + missingCount , null);
		}
		var foundMissing = 0;
		setClassBarFigureH(10,'discrete',false);   
	}

	/**********************************************************************************
	 * FUNCTION - getBarGraphForDiscreteClassBar: places the classBar legend using the
	 * variables leftOff and topOff, which are updated after every classBar legend.
	 * inputs: classBar object, colorMap object, and string for name
	 **********************************************************************************/
	function getBarGraphForDiscreteClassBar(key, type){
		var foundMissing = 0;
		var splitTitle = doc.splitTextToSize(key, classBarFigureW);
		var bartop = topOff+5 + (splitTitle.length-1)*classBarLegendTextSize*2;
		var colorMap = NgChm.heatMap.getColorMapManager().getColorMap(type, key);
		var thresholds = colorMap.getThresholds();
		if (isChecked("pdfInputPortrait") && (thresholds.length > 56)) {
			doc.setFontType("bold");
		    doc.text(leftOff, topOff, splitTitle);
			doc.setFontType("normal");
			doc.text(leftOff + 15, bartop + classBarLegendTextSize, "This discrete covariate bar contains too", null);
			doc.text(leftOff +15, bartop + classBarLegendTextSize+12, "many categories to print.", null);
			setClassBarFigureH(2,'discrete',0);   
		} else if (isChecked("pdfInputLandscape") && (thresholds.length > 40)) {
			doc.setFontType("bold");
		    doc.text(leftOff, topOff, splitTitle);
			doc.setFontType("normal");
			doc.text(leftOff +15, bartop + classBarLegendTextSize,    "This discrete covariate bar contains too", null);
			doc.text(leftOff +15, bartop + classBarLegendTextSize+12, "many categories to print. You may try", null);
			doc.text(leftOff +15, bartop + classBarLegendTextSize+24, "printing in portrait mode.", null);
			setClassBarFigureH(3,'discrete',0);   
		} else {
			if ((topOff + (thresholds.length*13) > pageHeight) && !isLastClassBarToBeDrawn(key,type)) {
				doc.addPage(); // ... make a new page and reset topOff
				createHeader(theFont, sectionHeader + " (continued)");
				topOff = paddingTop + 15;
				leftOff = 20; // ...reset leftOff...
			}
			bartop = topOff+5 + (splitTitle.length - 1)*(classBarLegendTextSize*2);
			//Adjustment for multi-line covariate headers
			if(splitTitle.length > 1) {
				classBarHeaderHeight = (classBarHeaderSize*splitTitle.length)+(4*splitTitle.length)+10;  //TEST
			}
			doc.setFontType("bold");
		    doc.text(leftOff, topOff, splitTitle);
			doc.setFontType("normal");
		    
			var classBarConfig = rowClassBarConfig[key];
			var classBarData = rowClassBarData[key];
			if (type !== 'row') {
				classBarConfig = colClassBarConfig[key];
				classBarData = colClassBarData[key];
			}
			var barHeight = classBarLegendTextSize + 3;
			var counts = {}, maxCount = 0, maxLabelLength = doc.getStringUnitWidth("Missing Value")*classBarLegendTextSize;
			// get the number N in each threshold
			var cutValues = 0;
			for(var i = 0; i< classBarData.values.length; i++) {
			    var num = classBarData.values[i];
			    if (num !== '!CUT!') {
			    	counts[num] = counts[num] ? counts[num]+1 : 1;
			    } else {
			    	cutValues++;
			    }
			}
			for (var val in counts){
				maxCount = Math.max(maxCount, counts[val]);
				maxLabelLength = Math.max(maxLabelLength, doc.getStringUnitWidth(val,classBarLegendTextSize)*classBarLegendTextSize);
			}
				
			// NOTE: missingCount will contain all elements that are not accounted for in the thresholds
			// ie: thresholds = [type1, type2, type3], typeX will get included in the missingCount
			var missingCount = classBarData.values.length-cutValues;
			// Get maximum length of threshhold title for use in separating counts from title
			var threshMaxLen = getThreshMaxLength(thresholds,classBarLegendTextSize);
			// Indent threshholds from class bar title
			leftOff += 10;
			// draw the bars
			for (var j = 0; j < thresholds.length; j++){ // make a gradient stop (and also a bucket for continuous)
				var rgb = colorMap.getClassificationColor(thresholds[j]);
				doc.setFillColor(rgb.r,rgb.g,rgb.b);
				doc.setDrawColor(0,0,0);
				var count = counts[thresholds[j]] ? counts[thresholds[j]] : 0;
				if (condenseClassBars){
					var barW = 10;
					doc.rect(leftOff, bartop, barW, barHeight, "FD");
					doc.setFontSize(classBarLegendTextSize);
					doc.text(leftOff +barW + 5, bartop + classBarLegendTextSize, thresholds[j].toString(), null);
					doc.text(leftOff +barW + threshMaxLen + 10, bartop + classBarLegendTextSize, "n = " + count, null);
				} else {
					var barW = (count/maxCount*classBarFigureW)*.65;  //scale bars to fit page
					doc.rect(leftOff + maxLabelLength, bartop, barW, barHeight, "FD");
					doc.setFontSize(classBarLegendTextSize);
					doc.text(leftOff + maxLabelLength - doc.getStringUnitWidth(thresholds[j].toString())*classBarLegendTextSize - 4, bartop + classBarLegendTextSize, thresholds[j].toString() , null);
					doc.text(leftOff + maxLabelLength +barW + 5, bartop + classBarLegendTextSize, "n = " + count , null);
				
				
				}
				missingCount -= count;
				bartop+=barHeight;
			}
			// Draw missing values bar IF missing values > 0
			missingCount = Math.max(0,missingCount); // just in case missingCount goes negative...
			if (missingCount > 0) {
				foundMissing = 1;
				var rgb = colorMap.getClassificationColor("Missing Value");
				doc.setFillColor(rgb.r,rgb.g,rgb.b);
				doc.setDrawColor(0,0,0);
				drawMissingColor(bartop, barHeight, missingCount, maxCount, maxLabelLength, threshMaxLen);
			}
			
			if (thresholds.length * barHeight > classBarFigureH){ // in case a discrete classbar has over 15 categories, make the topOff increment bigger
				topSkip = (thresholds.length+1) * barHeight+classBarHeaderSize;
			}
			setClassBarFigureH(thresholds.length,'discrete',foundMissing);   
		}
		// adjust the location for the next class bar figure
		adjustForNextClassBar(key,type,maxLabelLength);
	}
	
	/**********************************************************************************
	 * FUNCTION - getBarGraphForContinousClassBar: places the classBar legend using the
	 * variables leftOff and topOff, which are updated after every classBar legend.
	 * inputs: classBar object, colorMap object, and string for name
	 **********************************************************************************/
	function getBarGraphForContinuousClassBar(key, type){
		var foundMissing = 0;
		// Write class bar name to PDF
		var splitTitle = doc.splitTextToSize(key, classBarFigureW);
		doc.setFontType("bold");
		doc.text(leftOff, topOff, splitTitle);
		doc.setFontType("normal");
		var classBars = NgChm.heatMap.getColClassificationConfig();
		if (type === 'row') {
			classBars = NgChm.heatMap.getRowClassificationConfig();
		}
		var classBar = classBars[key];
		//Adjustment for multi-line covariate headers
		if(splitTitle.length > 1) {
			classBarHeaderHeight = (classBarHeaderSize*splitTitle.length)+(4*splitTitle.length)+10;   
		}
		var colorMap = NgChm.heatMap.getColorMapManager().getColorMap(type, key);
		var classBarConfig = rowClassBarConfig[key];
		var classBarData = rowClassBarData[key];
		if (type !== 'row') {
			classBarConfig = colClassBarConfig[key];
			classBarData = colClassBarData[key];
		}
		var thresholds = colorMap.getContinuousThresholdKeys();
		var barHeight = classBarLegendTextSize + 3;

		// get the number N in each threshold
		var counts = {};
		var maxCount = 0;
		maxLabelLength = doc.getStringUnitWidth("Missing Value")*classBarLegendTextSize;

		// get the continuous thresholds and find the counts for each bucket
		var cutValues = 0;
		for(var i = 0; i < classBarData.values.length; i++) {
		    var num = classBarData.values[i];
		    if (num !== '!CUT!') {
			    for (var k = 0; k < thresholds.length; k++){
					var thresh = thresholds[k];
					if (k == 0 && num < thresholds[k]){
						counts[thresh] = counts[thresh] ? counts[thresh]+1 : 1;
					} else if (k == thresholds.length-1 && num > thresholds[thresholds.length-1]){
						counts[thresh] = counts[thresh] ? counts[thresh]+1 : 1;
					} else if (num <= thresh){
						counts[thresh] = counts[thresh] ? counts[thresh]+1 : 1;
						break;
					}
				}
		    } else {
		    	cutValues++;
		    }
		}
		
		// find the longest label length
		for (var val in counts){
			maxCount = Math.max(maxCount, counts[val]);
			maxLabelLength = Math.max(maxLabelLength, doc.getStringUnitWidth(val.length)*classBarLegendTextSize);
		}
		
		var bartop = topOff+5 + (splitTitle.length-1)*classBarLegendTextSize*2;
		var missingCount = classBarData.values.length - cutValues; // start at total number of labels and work down
		var value;
		// Get maximum length of threshhold title for use in separating counts from title
		var threshMaxLen = getThreshMaxLength(thresholds,classBarLegendTextSize);
		// Indent threshholds from class bar title
		leftOff += 10;
		for (var j = 0; j < thresholds.length-1; j++){
			var rgb = colorMap.getClassificationColor(thresholds[j]);
			if (classBar.bar_type !== 'color_plot') {
				rgb = colorMap.getClassificationColor(thresholds[thresholds.length-1]);
			}
			doc.setFillColor(rgb.r,rgb.g,rgb.b);
			doc.setDrawColor(0,0,0);
			value = counts[thresholds[j]];
			if (isNaN(value) || value == undefined){
				value = 0;
			}
			if (condenseClassBars){ // square
				var barW = 10;
				doc.rect(leftOff, bartop, barW, barHeight, "FD"); // make the square
				doc.setFontSize(classBarLegendTextSize);
				doc.text(leftOff +barW + 5, bartop + classBarLegendTextSize, thresholds[j].toString(), null);
				doc.text(leftOff +barW + threshMaxLen + 10, bartop + classBarLegendTextSize, "n = " + value , null);
			} else { // histogram
				var barW = (value/maxCount*classBarFigureW)*.65;  //scale bars to fit page
				doc.rect(leftOff + maxLabelLength, bartop, barW, barHeight, "FD"); // make the histo bar
				doc.setFontSize(classBarLegendTextSize);
				doc.text(leftOff + maxLabelLength - doc.getStringUnitWidth(thresholds[j].toString())*classBarLegendTextSize - 4, bartop + classBarLegendTextSize, thresholds[j].toString() , null);
				doc.text(leftOff + maxLabelLength +barW + 5, bartop + classBarLegendTextSize, "n = " + value , null);
			}
			missingCount -= value; 
			bartop+=barHeight; // adjust top position for the next bar
		}
		// Draw missing values bar IF missing values > 0
		missingCount = Math.max(0,missingCount); // just in case missingCount goes negative...
		if (missingCount > 0) {
			foundMissing = 1;
			var rgb = colorMap.getClassificationColor("Missing Value");
			doc.setFillColor(rgb.r,rgb.g,rgb.b);
			doc.setDrawColor(0,0,0);
			drawMissingColor(bartop, barHeight, missingCount, maxCount, maxLabelLength, threshMaxLen);
		}
		setClassBarFigureH(0,'continuous',foundMissing);   
		adjustForNextClassBar(key,type,maxLabelLength);
	}

	/**********************************************************************************
	 * FUNCTION - drawMissingColor: This function will set the missing color line for
	 * either type (row/col) of classification bar.
	 **********************************************************************************/
	function drawMissingColor(bartop, barHeight, missingCount, maxCount, maxLabelLength, threshMaxLen) {
		if (condenseClassBars){
			var barW = 10;
			doc.rect(leftOff, bartop, barW, barHeight, "FD");
			doc.setFontSize(classBarLegendTextSize);
			doc.text(leftOff +barW + 5, bartop + classBarLegendTextSize, "Missing Value", null);
			doc.text(leftOff +barW + threshMaxLen + 10, bartop + classBarLegendTextSize, "n = " + missingCount , null);
		} else {
			var barW = missingCount/maxCount*classBarFigureW;
			doc.rect(leftOff + maxLabelLength, bartop, barW, barHeight, "FD");
			doc.setFontSize(classBarLegendTextSize);
			doc.text(leftOff + maxLabelLength - doc.getStringUnitWidth("Missing Value")*classBarLegendTextSize - 4, bartop + classBarLegendTextSize, "Missing Value" , null);
			doc.text(leftOff + maxLabelLength +barW + 5, bartop + classBarLegendTextSize, "n = " + missingCount , null);
		}
	}
	
	/**********************************************************************************
	 * FUNCTION - adjustForNextClassBar: This function will set the positioning for the
	 * next class bar to be drawn
	 **********************************************************************************/
	function adjustForNextClassBar(key,type,maxLabelLength) {
		leftOff+= classBarFigureW + maxLabelLength + 60;
		if (leftOff + classBarFigureW > pageWidth){ // if the next class bar figure will go beyond the width of the page...
			leftOff = 20; // ...reset leftOff...
			topSkip  = classBarFigureH + classBarHeaderHeight; 
			topOff += topSkip; // ... and move the next figure to the line below
			classBarHeaderHeight = classBarHeaderSize+10; //reset this value
			var nextClassBarFigureH = getNextLineClassBarFigureH(key,type);
			if (topOff + classBarHeaderHeight + nextClassBarFigureH > pageHeight && !isLastClassBarToBeDrawn(key,type)){ // if the next class bar goes off the page vertically...
				doc.addPage(); // ... make a new page and reset topOff
				createHeader(theFont, sectionHeader + " (continued)");
				topOff = paddingTop + 15;
			}
			classBarFigureH = 0;   
		}
	}
	
	/**********************************************************************************
	 * FUNCTION - getNextLineClassBarFigureH: This function is used to determine the
	 * height of the next few class bars when a new line of class bar legends needs to 
	 * be drawn.
	 **********************************************************************************/
	function getNextLineClassBarFigureH(key,type){
		var minLabelLength = doc.getStringUnitWidth("Missing Value")*classBarLegendTextSize;
		var classBarsToDraw = type == "col" ? colBarsToDraw : rowBarsToDraw;
		var classBars = type == "col" ? NgChm.heatMap.getColClassificationConfig(): NgChm.heatMap.getRowClassificationConfig();
		var index = classBarsToDraw.indexOf(key);
		var classW = classBarFigureW;
		var maxThresh = 0;
		var numFigures = 0;
		var nextIdx = index+1;
		while (numFigures*(classBarFigureW+minLabelLength+60) < pageWidth){
			var barName = classBarsToDraw[nextIdx];
			if (!barName) break;
			var thisBar = classBars[barName];
			var threshCount = thisBar.color_map.thresholds.length+1; // +1 added to assume that missing values will be present
			if (thisBar.color_map.type == "continuous"){threshCount = 10}
			if (threshCount > maxThresh) maxThresh = threshCount;
			nextIdx++,numFigures++;
		}
		return maxThresh*classBarLegendTextSize;
	}
	
	/**********************************************************************************
	 * FUNCTION - isChecked: This function will check the checkboxes/radio buttons to see 
	 * how the PDF is to be created. 
	 **********************************************************************************/
	function isChecked(el){
		if(document.getElementById(el))
		return document.getElementById(el).checked;
	}
	
	function getThreshMaxLength(thresholds,fontSize) {
		var threshMaxLen = 0;
		for (var i = 0; i < thresholds.length; i++){ // make a gradient stop (and also a bucket for continuous)
			var thresh = thresholds[i];
			if (thresh.length > threshMaxLen) {
				threshMaxLen = thresh.length;
			}
		}
		//Account for "Missing Values" label
		if (threshMaxLen < 13) {
			threshMaxLen = 13;
		}
		threshMaxLen *= fontSize/2;
		return threshMaxLen;
	}

	/**********************************************************************************
	 * FUNCTION - isLastClassBarToBeDrawn: Checks if this is the last class bar to be 
	 * drawn. Used to determine if we add a new page when drawing class bars.
	 **********************************************************************************/
	function isLastClassBarToBeDrawn(classBar,type){
		var isItLast = false;
		if (isChecked('pdfInputColumn')) {
			var colBars = NgChm.heatMap.getColClassificationOrder("show");
			if ((type === 'col') && (classBar === colBars[colBars.length - 1])) {
				isItLast = true
			}
		}
		if (isChecked('pdfInputRow')) {
			var rowBars = NgChm.heatMap.getRowClassificationOrder("show");
			if ((type === 'row') && (classBar === rowBars[rowBars.length - 1])) {
				isItLast = true
			}
		}
		return isItLast;
	}
	
	/*
	 * The summary box canvas and summary dendro canvases are sized based on the size of the browser so 
	 * that the lines drawn in them are the correct width.  We are going to draw these canvases on a PDF
	 * page so temporarily resize these canvases to the correct size for a normal page.
	 */
	function resizeCanvas (sumMapW, sumMapH, rowDendroWidth, colDendroHeight) {
		//Save the current settings.
		NgChm.PDF.boxCanvasWidth = NgChm.SUM.boxCanvas.width;
		NgChm.PDF.boxCanvasHeight = NgChm.SUM.boxCanvas.height;
		NgChm.PDF.colDendroWidth = document.getElementById('column_dendro_canvas').width;
		NgChm.PDF.colDendroHeight = document.getElementById('column_dendro_canvas').height;
		NgChm.PDF.rowDendoWidth = document.getElementById('row_dendro_canvas').width;
		NgChm.PDF.rowDendroHeight = document.getElementById('row_dendro_canvas').height;
		NgChm.SUM.boxCanvas.width =  sumMapW;
		NgChm.SUM.boxCanvas.height = sumMapH;
		document.getElementById('column_dendro_canvas').width = sumMapW - rowClassWidth;
		document.getElementById('column_dendro_canvas').height = colDendroHeight;
		document.getElementById('row_dendro_canvas').width = rowDendroWidth;
		document.getElementById('row_dendro_canvas').height = sumMapH - colClassHeight;
		document.getElementById('summary_col_top_items_canvas').style.width = sumMapW - rowClassWidth;
		document.getElementById('summary_row_top_items_canvas').style.height = sumMapH - colClassHeight;

		NgChm.SUM.drawSummaryHeatMap();
		NgChm.SUM.setSelectionDivSize(sumMapW,sumMapH);
		NgChm.SUM.drawTopItems();
		NgChm.SUM.colDendro.drawNoResize();
		NgChm.SUM.rowDendro.drawNoResize();
	}
	
	function resizeDetailDendroCanvas(detMapW,detMapH, rowDendroW, colDendroH){
		NgChm.DET.canvas.style.height = detMapH;
		NgChm.DET.canvas.style.width = detMapW;
		NgChm.DET.clearLabels();
		NgChm.DET.drawRowAndColLabels();  
		document.getElementById('detail_row_dendro_canvas').height = detMapH;
		document.getElementById('detail_row_dendro_canvas').style.height = detMapH;
		document.getElementById('detail_row_dendro_canvas').width = rowDendroW;
		document.getElementById('detail_row_dendro_canvas').style.width = rowDendroW;
		
		document.getElementById('detail_column_dendro_canvas').width = detMapW;
		document.getElementById('detail_column_dendro_canvas').style.width = detMapW;
		document.getElementById('detail_column_dendro_canvas').height = colDendroH;
		document.getElementById('detail_column_dendro_canvas').style.height = colDendroH;
		NgChm.DET.rowDendro.draw();
		NgChm.DET.colDendro.draw();
		NgChm.DET.detailDrawColClassBarLabels();
		NgChm.DET.detailDrawRowClassBarLabels();
	}
	
	/*
	 * Put the box canvas and summary canvas back the way we found them.
	 */
	function restoreCanvas () {
		//Restore saved height/width settings and redraw.
		NgChm.SUM.boxCanvas.width =  NgChm.PDF.boxCanvasWidth;
		NgChm.SUM.boxCanvas.height = NgChm.PDF.boxCanvasHeight;
		document.getElementById('column_dendro_canvas').width = NgChm.PDF.colDendroWidth;
		document.getElementById('column_dendro_canvas').height = NgChm.PDF.colDendroHeight;
		document.getElementById('row_dendro_canvas').width = NgChm.PDF.rowDendoWidth;
		document.getElementById('row_dendro_canvas').height = NgChm.PDF.rowDendroHeight;
		NgChm.SUM.drawSummaryHeatMap();
		NgChm.SUM.setSelectionDivSize(NgChm.PDF.boxCanvasWidth,NgChm.PDF.boxCanvasHeight);
		NgChm.SUM.drawTopItems();
		NgChm.SUM.colDendro.drawNoResize();
		NgChm.SUM.rowDendro.drawNoResize();
	}

}

/**********************************************************************************
 * FUNCTION - pdfCancelButton: This function closes the PDF preferences panel when
 * the user presses the cancel button.
 **********************************************************************************/
NgChm.PDF.pdfCancelButton = function() {
	document.getElementById('pdfErrorMessage').style.display="none";
	var prefspanel = document.getElementById('pdfPrefsPanel');
	prefspanel.style.display = "none";
    NgChm.DET.canvas.focus();
}