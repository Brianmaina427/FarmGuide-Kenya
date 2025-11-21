// script.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const cropSelect = document.getElementById('crop-select');
    const landSizeInput = document.getElementById('land-size');
    const generateGuideBtn = document.getElementById('generate-guide');
    const cropGrid = document.getElementById('crop-grid');
    const cropSelectionSection = document.getElementById('crop-selection');
    const guideDisplaySection = document.getElementById('guide-display');
    const backToSelectionBtn = document.getElementById('back-to-selection');
    const printGuideBtn = document.getElementById('print-guide');
    
    // Summary elements
    const summaryCrop = document.getElementById('summary-crop');
    const summaryType = document.getElementById('summary-type');
    const summaryDuration = document.getElementById('summary-duration');
    const summaryLand = document.getElementById('summary-land');
    const summaryBaseFertilizer = document.getElementById('summary-base-fertilizer');
    const summaryTopFertilizer = document.getElementById('summary-top-fertilizer');
    const summaryPestSpray = document.getElementById('summary-pest-spray');
    
    // Content containers
    const timeline = document.getElementById('timeline');
    const pestList = document.getElementById('pest-list');
    const guideTitle = document.getElementById('guide-title');
    
    // Initialize the app
    initApp();
    
    function initApp() {
        // Populate crop select dropdown
        populateCropSelect();
        
        // Populate crop grid
        populateCropGrid();
        
        // Add event listeners
        generateGuideBtn.addEventListener('click', generateGuide);
        backToSelectionBtn.addEventListener('click', showCropSelection);
        printGuideBtn.addEventListener('click', printGuide);
        
        // Add click event to crop cards
        document.querySelectorAll('.crop-card').forEach(card => {
            card.addEventListener('click', function() {
                const cropName = this.getAttribute('data-crop');
                cropSelect.value = cropName;
                // Scroll to form
                document.querySelector('.selection-form').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
    
    function populateCropSelect() {
        // Clear existing options
        cropSelect.innerHTML = '<option value="">-- Select a crop --</option>';
        
        // Add crops from CROP_DATA
        Object.keys(CROP_DATA).forEach(cropKey => {
            const crop = CROP_DATA[cropKey];
            const option = document.createElement('option');
            option.value = cropKey;
            option.textContent = crop.name;
            cropSelect.appendChild(option);
        });
    }
    
    function populateCropGrid() {
        // Clear existing grid
        cropGrid.innerHTML = '';
        
        // Add crops from CROP_DATA
        Object.keys(CROP_DATA).forEach(cropKey => {
            const crop = CROP_DATA[cropKey];
            
            const cropCard = document.createElement('div');
            cropCard.className = 'crop-card fade-in';
            cropCard.setAttribute('data-crop', cropKey);
            
            cropCard.innerHTML = `
                <div class="crop-image">
                    <img src="${crop.image}" alt="${crop.name}">
                </div>
                <div class="crop-info">
                    <div class="crop-name">${crop.name}</div>
                    <div class="crop-type">${crop.type}</div>
                    <div class="crop-duration">Duration: ${crop.durationWeeks} weeks</div>
                </div>
            `;
            
            cropGrid.appendChild(cropCard);
        });
    }
    
    function generateGuide() {
        const selectedCrop = cropSelect.value;
        const landSize = parseFloat(landSizeInput.value);
        
        // Validate inputs
        if (!selectedCrop) {
            alert('Please select a crop');
            return;
        }
        
        if (!landSize || landSize <= 0) {
            alert('Please enter a valid farm size in hectares');
            return;
        }
        
        // Get crop data
        const crop = CROP_DATA[selectedCrop];
        
        // Update summary
        updateSummary(crop, landSize);
        
        // Update timeline
        updateTimeline(crop, landSize);
        
        // Update pest information
        updatePestInfo(crop);
        
        // Update guide title
        guideTitle.textContent = `Farming Guide: ${crop.name}`;
        
        // Show guide section
        showGuideDisplay();
    }
    
    function updateSummary(crop, landSize) {
        summaryCrop.textContent = crop.name;
        summaryType.textContent = crop.type;
        summaryDuration.textContent = crop.durationWeeks;
        summaryLand.textContent = landSize;
        
        // Calculate fertilizer and spray amounts
        const baseFertilizerAmount = crop.baseFertilizerKgPerHa * landSize;
        const topDressFertilizerAmount = crop.topDressFertilizerKgPerHa * landSize;
        const pestSprayAmount = crop.pestSprayLitresPerHa * landSize;
        
        summaryBaseFertilizer.textContent = `${baseFertilizerAmount.toFixed(1)} kg of ${crop.baseFertilizerType}`;
        summaryTopFertilizer.textContent = `${topDressFertilizerAmount.toFixed(1)} kg of ${crop.topDressFertilizerType}`;
        summaryPestSpray.textContent = `${pestSprayAmount.toFixed(1)} L of pesticide`;
    }
    
    function updateTimeline(crop, landSize) {
        // Clear existing timeline
        timeline.innerHTML = '';
        
        // Add timeline items
        crop.guide.forEach(step => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item fade-in';
            
            // Calculate input amount for the farm size
            const inputAmount = step.inputKgPerHa * landSize;
            let inputDisplay = '';
            
            if (inputAmount > 0) {
                const unit = step.inputType.includes('Insecticide') || step.inputType.includes('Fungicide') || 
                            step.inputType.includes('Foliar') || step.inputType.includes('Ethephon') ? 'L' : 'kg';
                inputDisplay = `
                    <div class="timeline-input">
                        <span><strong>Input Required:</strong> ${step.inputType}</span>
                        <span><strong>Amount:</strong> ${inputAmount.toFixed(1)} ${unit}</span>
                    </div>
                `;
            }
            
            timelineItem.innerHTML = `
                <div class="timeline-week">Week ${step.week}</div>
                <div class="timeline-activity">${step.activity}</div>
                <div class="timeline-detail">${step.detail}</div>
                ${inputDisplay}
            `;
            
            timeline.appendChild(timelineItem);
        });
    }
    
    function updatePestInfo(crop) {
        // Clear existing pest list
        pestList.innerHTML = '';
        
        // Add pest information
        crop.commonPests.forEach(pest => {
            const pestItem = document.createElement('div');
            pestItem.className = 'pest-item fade-in';
            
            pestItem.innerHTML = `
                <div class="pest-name">${pest.name}</div>
                <div class="pest-solution">${pest.solution}</div>
            `;
            
            pestList.appendChild(pestItem);
        });
    }
    
    function showGuideDisplay() {
        cropSelectionSection.style.display = 'none';
        guideDisplaySection.style.display = 'block';
        
        // Scroll to top of guide
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function showCropSelection() {
        guideDisplaySection.style.display = 'none';
        cropSelectionSection.style.display = 'block';
        
        // Scroll to crop selection
        cropSelectionSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    function printGuide() {
        window.print();
    }
    
    // Add fade-in animation to elements as they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all elements with the fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});