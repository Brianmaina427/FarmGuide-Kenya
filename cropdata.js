// cropData.js
// Detailed crop guides based on standard Kenyan agricultural guidelines (KALRO/Agribusiness)
// All fertilizer/spray rates are standardized to Kilograms or Litres per Hectare (Kg/Ha or L/Ha).
const CROP_DATA = {

    // --- STAPLE CROPS ---

    'Maize': {
        name: 'Maize (Wimbi)',
        type: 'Staple',
        durationWeeks: 18,
        baseFertilizerKgPerHa: 125, 
        baseFertilizerType: 'DAP (Diammonium Phosphate)',
        topDressFertilizerKgPerHa: 125,
        topDressFertilizerType: 'CAN (Calcium Ammonium Nitrate)',
        pestSprayLitresPerHa: 1.5,
        image: 'https://cdn.pixabay.com/photo/2018/10/21/17/23/cornfield-3763119_1280.jpg',
        commonPests: [
            { name: 'Fall Armyworm', solution: 'Scouting is key. Use targeted systemic insecticides (e.g., Emamectin Benzoate) or biological controls when larvae are young.' },
            { name: 'Maize Lethal Necrosis Disease (MLND)', solution: 'Use certified, resistant seed. Control vector pests (thrips) and practice strict crop rotation.' }
        ],
        guide: [
            { week: 0, activity: 'Land Preparation & Planting', detail: 'Plough deeply, harrow, and plant certified seed 5-10cm deep at the onset of rains. Spacing: 75cm between rows, 30cm between plants.', inputKgPerHa: 0, inputType: 'Seed' },
            { week: 0, activity: 'Basal Fertilizer Application', detail: `Apply DAP (125 Kg/Ha). This provides Phosphorus (P) for strong root establishment. Place fertilizer in the hole and mix well with soil to avoid seed scorching.`, inputKgPerHa: 125, inputType: 'DAP' },
            { week: 4, activity: 'Top Dressing & First Weeding', detail: `Apply CAN (125 Kg/Ha) when the crop is knee-high (around 4-6 weeks). CAN supplies Nitrogen (N) crucial for vegetative growth. Apply in a ring 15cm from the stem. Weed control is critical at this stage.`, inputKgPerHa: 125, inputType: 'CAN' },
            { week: 8, activity: 'Pest Scouting & Spray', detail: `Monitor for Fall Armyworm outbreaks. If infestation is above 5% of plants, spray with 1.5 L/Ha of systemic insecticide.`, inputKgPerHa: 1.5, inputType: 'Systemic Insecticide' },
            { week: 16, activity: 'Harvesting', detail: 'Harvest when cobs are dry, kernels are hard, and moisture is below 13% for safe storage.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },

    'Rice': {
        name: 'Rice (Paddy)',
        type: 'Staple',
        durationWeeks: 16,
        baseFertilizerKgPerHa: 150, 
        baseFertilizerType: 'DAP (Basal)',
        topDressFertilizerKgPerHa: 150,
        topDressFertilizerType: 'Urea (Top Dressing)',
        pestSprayLitresPerHa: 1.0, 
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Rice Blast', solution: 'Use resistant varieties and apply fungicide (e.g., Tricyclazole) preventively in the nursery and at panicle initiation.' },
            { name: 'Stem Borer', solution: 'Monitor fields and use targeted insecticides (e.g., Fipronil) or cultural methods like rotating crops.' }
        ],
        guide: [
            { week: 0, activity: 'Nursery Prep & Transplanting', detail: 'Prepare the nursery 3-4 weeks before transplanting. Transplant seedlings (25-30 days old) at 20x15cm spacing into well-puddled and levelled paddy fields.', inputKgPerHa: 0, inputType: 'Seedling' },
            { week: 0, activity: 'Basal Fertilizer Application', detail: `Apply DAP (150 Kg/Ha) before final puddling or at transplanting. This supports initial root growth in the submerged soil.`, inputKgPerHa: 150, inputType: 'DAP' },
            { week: 3, activity: 'First Top Dressing (Tillering)', detail: `Apply the first split of Urea (75 Kg/Ha) at the maximum tillering stage (3 weeks after transplanting). Nitrogen is vital for increasing the number of tillers (stems).`, inputKgPerHa: 75, inputType: 'Urea' },
            { week: 7, activity: 'Second Top Dressing (Panicle Initiation)', detail: `Apply the second split of Urea (75 Kg/Ha) at the panicle initiation stage. This boost ensures the panicles (seed heads) are well-filled with grains.`, inputKgPerHa: 75, inputType: 'Urea' },
            { week: 14, activity: 'Harvesting', detail: 'Harvest when 80-85% of the grains are golden yellow. Drain the field completely 1-2 weeks before harvest.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },

    'Wheat': {
        name: 'Wheat (Ngano)',
        type: 'Staple',
        durationWeeks: 14,
        baseFertilizerKgPerHa: 125,
        baseFertilizerType: 'DAP (Diammonium Phosphate)',
        topDressFertilizerKgPerHa: 100,
        topDressFertilizerType: 'CAN (Calcium Ammonium Nitrate)',
        pestSprayLitresPerHa: 1.0, 
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hlYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        commonPests: [
            { name: 'Brown Leaf Rust', solution: 'Use resistant varieties (e.g., Kenya Wren). Apply systemic fungicides (e.g., Triadimefon) preventively or at first sight of infection.' },
            { name: 'Aphids', solution: 'Use recommended insecticide (e.g., Karate Zeon) if infestation is high, especially during the boot and grain filling stages.' }
        ],
        guide: [
            { week: 0, activity: 'Sowing & Basal Fertilizer', detail: 'Plant seeds 3-5cm deep using a seed drill for accurate spacing (20-25cm between rows). Apply DAP (125 Kg/Ha) at planting for root establishment.', inputKgPerHa: 125, inputType: 'DAP' },
            { week: 3, activity: 'Top Dressing (Tillering)', detail: `Apply CAN (100 Kg/Ha) at the crown root initiation (CRI) or tillering stage (3-4 weeks after sowing). This boost ensures robust tillers for higher yield.`, inputKgPerHa: 100, inputType: 'CAN' },
            { week: 6, activity: 'Weed & Disease Control', detail: 'Apply a broadleaf and grassy weed herbicide (e.g., 2,4-D or Wild Oat specific) and monitor for rust diseases, applying fungicide (1.0 L/Ha) if conditions are favorable.', inputKgPerHa: 1.0, inputType: 'Fungicide' },
            { week: 14, activity: 'Harvesting', detail: 'Harvest when the crop is golden yellow and the grain moisture content is between 12% and 13%.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },
    
    // --- HIGH-VALUE/CASH CROPS ---

    'Potatoes': {
        name: 'Irish Potatoes (Viazi)',
        type: 'Cash',
        durationWeeks: 15,
        baseFertilizerKgPerHa: 500,
        baseFertilizerType: 'DAP (Basal) / NPK 17:17:17',
        topDressFertilizerKgPerHa: 250,
        topDressFertilizerType: 'CAN (Calcium Ammonium Nitrate)',
        pestSprayLitresPerHa: 2.0, 
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Late Blight', solution: 'The main threat. Apply protective fungicides (e.g., Mancozeb) every 7-10 days, especially in wet weather. Use certified seeds.' },
            { name: 'Bacterial Wilt', solution: 'Strict crop rotation (4 years). Up-root and destroy infected plants immediately. Use clean seed potatoes.' }
        ],
        guide: [
            { week: 0, activity: 'Planting & Basal Fertilizer', detail: 'Plant certified seed potatoes 10-15 cm deep in high ridges (25-30 cm high). Apply DAP (500 Kg/Ha) in the furrow and mix with soil before planting.', inputKgPerHa: 500, inputType: 'DAP' },
            { week: 3, activity: 'First Earthing Up & Top Dressing', detail: `When plants are 15-20cm tall, earth up the rows. Top dress with CAN (250 Kg/Ha) before earthing up.`, inputKgPerHa: 250, inputType: 'CAN' },
            { week: 4, activity: 'Fungicide Spray Start', detail: 'Start preventative fungicide spraying (2.0 L/Ha) immediately. Late Blight spreads fast, so protection is non-negotiable, especially during cool, wet periods.', inputKgPerHa: 2.0, inputType: 'Fungicide' },
            { week: 6, activity: 'Second Earthing Up & Maintenance', detail: `Perform the final, high earthing-up to fully cover developing tubers (critical for PTM control and preventing 'greening').`, inputKgPerHa: 0, inputType: 'None' },
            { week: 14, activity: 'Harvesting Preparation', detail: 'Cut or spray the foliage (haulms) 1-2 weeks before harvest to allow the tuber skin to set and harden, preventing bruising.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },

    'Cabbages': {
        name: 'Cabbages',
        type: 'Cash',
        durationWeeks: 10,
        baseFertilizerKgPerHa: 750,
        baseFertilizerType: 'NPK 23:23:0 (Basal)',
        topDressFertilizerKgPerHa: 400,
        topDressFertilizerType: 'CAN (Calcium Ammonium Nitrate)',
        pestSprayLitresPerHa: 1.0, 
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/cabbage-1238251_1280.jpg',
        commonPests: [
            { name: 'Diamond Back Moth (DBM)', solution: 'Rotate insecticides to prevent resistance. Use biological controls (Bacillus thuringiensis) or targeted chemical sprays like Ampligo.' },
            { name: 'Bacterial Black Rot', solution: 'Use certified, clean seed and practice strict hygiene. No chemical cure; rotation is vital.' }
        ],
        guide: [
            { week: 0, activity: 'Land Prep & Transplanting', detail: 'Transplant healthy seedlings. Dip seedlings in an insecticide solution for early protection. Spacing: 60cm x 45cm.', inputKgPerHa: 0, inputType: 'Seedling' },
            { week: 0, activity: 'Basal Fertilizer Application', detail: `Apply NPK 23:23:0 (750 Kg/Ha). This balanced fertilizer supports root growth and rapid leaf establishment. Incorporate into the planting hole.`, inputKgPerHa: 750, inputType: 'NPK 23:23:0' },
            { week: 2, activity: 'First Top Dressing', detail: `Apply the first split of CAN (150 Kg/Ha). Cabbages are heavy Nitrogen feeders for head formation.`, inputKgPerHa: 150, inputType: 'CAN' },
            { week: 4, activity: 'Second Top Dressing & Weeding', detail: `Apply the second split of CAN (150 Kg/Ha). Maintain weed-free environment as competition is high during head formation.`, inputKgPerHa: 150, inputType: 'CAN' },
            { week: 6, activity: 'Third Top Dressing & DBM Control', detail: `Apply the final split of CAN (100 Kg/Ha). Monitor rigorously for DBM. Spray 1.0 L/Ha of appropriate insecticide if pests are present.`, inputKgPerHa: 1.0, inputType: 'Insecticide' },
            { week: 10, activity: 'Harvesting', detail: 'Harvest when the heads are firm and fully mature. Selective harvesting allows smaller heads to grow.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },
    
    'Carrots': {
        name: 'Carrots',
        type: 'Cash',
        durationWeeks: 12,
        baseFertilizerKgPerHa: 600, 
        baseFertilizerType: 'Compound J (14:6:20)',
        topDressFertilizerKgPerHa: 150, 
        topDressFertilizerType: 'Ammonium Nitrate (A/N)',
        pestSprayLitresPerHa: 0.5, 
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Carrot Rust Fly', solution: 'Practice crop rotation and avoid planting near areas previously infected.' },
            { name: 'Alternaria Leaf Blight', solution: 'Use certified seed and spray preventive fungicide (e.g., Mancozeb) at 7-14 day intervals during wet periods.' }
        ],
        guide: [
            { week: 0, activity: 'Sowing & Basal Fertilizer', detail: 'Prepare a deep, fine, clod-free sandy-loam soil. Apply Compound J (600 Kg/Ha) basally before sowing. Avoid high Nitrogen at basal stage.', inputKgPerHa: 600, inputType: 'Compound J' },
            { week: 4, activity: 'Thinning & First Top Dressing', detail: `Thin seedlings to 5-8cm apart. Apply the first split of A/N (75 Kg/Ha) to promote canopy growth.`, inputKgPerHa: 75, inputType: 'A/N' },
            { week: 8, activity: 'Second Top Dressing', detail: `Apply the second split of A/N (75 Kg/Ha). Keep irrigation consistent; moisture stress causes split, fibrous roots.`, inputKgPerHa: 75, inputType: 'A/N' },
            { week: 12, activity: 'Harvesting', detail: 'Harvest when the root reaches market size (approx. 2-3 cm diameter). Do not delay harvesting as it reduces quality.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },

    // --- PERENNIAL CASH CROPS ---

    'Tea': {
        name: 'Tea (Chai)',
        type: 'Perennial Cash',
        durationWeeks: 52, 
        baseFertilizerKgPerHa: 667, // Total Annual Rate (approx 300 Kg N/Ha)
        baseFertilizerType: 'NPK(S) 25:5:5 (Annual)',
        topDressFertilizerKgPerHa: 0,
        topDressFertilizerType: 'N/A',
        pestSprayLitresPerHa: 0.0,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Mites (Red Spiders)', solution: 'Monitor leaves closely. Use recommended miticides only when necessary, or encourage natural predators.' },
            { name: 'Armillaria Root Rot', solution: 'No chemical cure. Remove and destroy infected bushes and clear the ground of old stumps before planting.' }
        ],
        guide: [
            { week: 10, activity: 'First Annual Fertilizer Split', detail: `Apply 1/3 of the annual NPK(S) rate (approx. 222 Kg/Ha) during the long rains (March/April). Fertilizer is applied to the soil surface, avoiding the collar of the bush.`, inputKgPerHa: 222, inputType: 'NPK(S) 25:5:5' },
            { week: 20, activity: 'Plucking/Harvesting Management', detail: 'Maintain continuous plucking of the flush (two leaves and a bud) to encourage new vegetative growth. Pluck every 7-14 days depending on growth rate.', inputKgPerHa: 0, inputType: 'None' },
            { week: 30, activity: 'Second Annual Fertilizer Split', detail: `Apply 1/3 of the annual NPK(S) rate (approx. 222 Kg/Ha) during the short rains (Oct/Nov).`, inputKgPerHa: 222, inputType: 'NPK(S) 25:5:5' },
            { week: 45, activity: 'Pruning (Every 3-5 years)', detail: 'Prune mature tea to maintain a manageable plucking table and rejuvenate the bush. Fertilizer is applied immediately after pruning or at tipping.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },

    'Coffee': {
        name: 'Coffee (Kahawa)',
        type: 'Perennial Cash',
        durationWeeks: 52,
        baseFertilizerKgPerHa: 200, 
        baseFertilizerType: 'NPK 25:5:5 (Annual)',
        topDressFertilizerKgPerHa: 300, 
        topDressFertilizerType: 'CAN (Calcium Ammonium Nitrate)',
        pestSprayLitresPerHa: 0.5, 
        image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Coffee Berry Disease (CBD)', solution: 'Spray preventive fungicides (e.g., Copper-based) during the main flowering and berry development periods (March-June).' },
            { name: 'Coffee Leaf Rust (CLR)', solution: 'Maintain high tree vigor through proper nutrition. Spray recommended fungicides if infection is severe.' }
        ],
        guide: [
            { week: 10, activity: 'Pre-Flowering Foliar Spray', detail: 'Apply a foliar feed rich in Zinc and Boron (e.g., 0.5 L/Ha) 1-2 months before the main flowering to reduce biennial bearing and improve yield/bean size.', inputKgPerHa: 0.5, inputType: 'Zinc/Boron Foliar' },
            { week: 15, activity: 'First Basal/Ground Fertilizer', detail: `Apply 1/3 of the annual ground fertilizer (NPK 25:5:5) at the start of the long rains (March/April).`, inputKgPerHa: 67, inputType: 'NPK 25:5:5' },
            { week: 20, activity: 'First Top Dressing (CAN)', detail: `Apply 1/3 of the annual CAN (100 Kg/Ha) during the active growth phase of the long rains.`, inputKgPerHa: 100, inputType: 'CAN' },
            { week: 35, activity: 'Second Basal/Ground Fertilizer', detail: `Apply the next 1/3 of the annual ground fertilizer (NPK 25:5:5) at the start of the short rains.`, inputKgPerHa: 67, inputType: 'NPK 25:5:5' },
            { week: 40, activity: 'Second Top Dressing (CAN)', detail: `Apply the final 1/3 of the annual CAN (100 Kg/Ha).`, inputKgPerHa: 100, inputType: 'CAN' }
        ]
    },

    // --- VEGETABLES & FRUITS ---

    'Sukuma Wiki': {
        name: 'Sukuma Wiki (Collard Greens)',
        type: 'Vegetable',
        durationWeeks: 8,
        baseFertilizerKgPerHa: 200, 
        baseFertilizerType: 'DAP or NPK 17:17:17',
        topDressFertilizerKgPerHa: 250, 
        topDressFertilizerType: 'CAN (Calcium Ammonium Nitrate)',
        pestSprayLitresPerHa: 1.0, 
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Aphids', solution: 'Spray with mild insecticidal soap or use systemic insecticides (1.0 L/Ha) to protect new shoots.' },
            { name: 'Cabbage Webworm', solution: 'Handpick or use biological sprays (Bacillus thuringiensis) as they damage the tender leaves.' }
        ],
        guide: [
            { week: 0, activity: 'Transplanting & Basal Fertilizer', detail: 'Transplant 4-6 week old seedlings at 60cm x 60cm spacing. Apply NPK/DAP (200 Kg/Ha) at planting for strong roots. Keep the soil moist.', inputKgPerHa: 200, inputType: 'NPK 17:17:17' },
            { week: 4, activity: 'First Top Dressing & Weeding', detail: `Side-dress with CAN (125 Kg/Ha) when plants are 4 weeks old to promote leafy growth. Weed control is crucial.`, inputKgPerHa: 125, inputType: 'CAN' },
            { week: 6, activity: 'Pest Control & Watering', detail: 'Scout daily for aphids and caterpillars. Apply insecticide (1.0 L/Ha) if necessary. Water consistently as moisture stress makes leaves bitter.', inputKgPerHa: 1.0, inputType: 'Insecticide' },
            { week: 8, activity: 'First Harvest & Second Top Dressing', detail: `Start harvesting the lower, outer leaves. Top-dress with the remaining CAN (125 Kg/Ha) to stimulate new growth after the first harvest.`, inputKgPerHa: 125, inputType: 'CAN' }
        ]
    },
    
    'Pineapples': {
        name: 'Pineapples',
        type: 'Fruit Cash',
        durationWeeks: 78,
        baseFertilizerKgPerHa: 400,
        baseFertilizerType: 'NPK 20:10:10 (Annual Split)',
        topDressFertilizerKgPerHa: 0, 
        topDressFertilizerType: 'N/A',
        pestSprayLitresPerHa: 1.5, 
        image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Mealybugs', solution: 'Control the mealybug-attending ants. Use soil drenches or sprays of systemic insecticides on the base of the plant.' },
            { name: 'Heart Rot', solution: 'Ensure excellent drainage and use preventative fungicide dips for planting material.' }
        ],
        guide: [
            { week: 0, activity: 'Planting & Basal Organic Manure', detail: 'Plant suckers/slips on raised beds (30cm high). Apply well-rotted manure/compost at planting. Spacing: 30cm x 60cm.', inputKgPerHa: 0, inputType: 'Manure/Compost' },
            { week: 12, activity: 'First Fertilizer Split', detail: `Apply 1/3 of the annual NPK (133 Kg/Ha) as a nitrogen-rich feed (e.g., NPK 20:10:10) at 3 months.`, inputKgPerHa: 133, inputType: 'NPK 20:10:10' },
            { week: 26, activity: 'Second Fertilizer Split', detail: `Apply 1/3 of the annual NPK (133 Kg/Ha) at 6 months.`, inputKgPerHa: 133, inputType: 'NPK 20:10:10' },
            { week: 52, activity: 'Flower Induction', detail: 'To force uniform flowering and harvesting, apply an ethylene-based solution (e.g., Ethephon at 1.5 L/Ha) 10-12 months after planting.', inputKgPerHa: 1.5, inputType: 'Ethephon' },
            { week: 78, activity: 'Harvesting', detail: 'Fruit is ready 5-6 months after flower induction. Harvest when the eyes flatten and the shell turns yellow-orange.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },

    'Watermelons': {
        name: 'Watermelons',
        type: 'Fruit Cash',
        durationWeeks: 12,
        baseFertilizerKgPerHa: 180,
        baseFertilizerType: 'DAP or NPK 17:17:17',
        topDressFertilizerKgPerHa: 150,
        topDressFertilizerType: 'CAN + MOP (Sulphate of Potash)',
        pestSprayLitresPerHa: 1.0, 
        image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Melon Aphids', solution: 'Apply recommended systemic insecticide (1.0 L/Ha) to new growth. Monitor continuously.' },
            { name: 'Downy Mildew', solution: 'Use preventative fungicides, especially when humidity is high. Avoid overhead irrigation late in the day.' }
        ],
        guide: [
            { week: 0, activity: 'Planting & Basal Fertilizer', detail: 'Sow seeds directly 1.25cm deep on raised beds. Incorporate DAP/NPK (180 Kg/Ha) into the planting hole.', inputKgPerHa: 180, inputType: 'DAP' },
            { week: 4, activity: 'Vine Establishment & First Top Dressing', detail: `Apply CAN (75 Kg/Ha) for vegetative growth. Provide support/mulch for vines to keep fruits off the ground.`, inputKgPerHa: 75, inputType: 'CAN' },
            { week: 6, activity: 'Flowering & Fruit Set (K Boost)', detail: `Apply Sulphate of Potash (75 Kg/Ha) or K-rich fertilizer. Potassium is crucial for fruit quality and sugar development.`, inputKgPerHa: 75, inputType: 'Sulphate of Potash' },
            { week: 10, activity: 'Pest & Disease Control', detail: 'Monitor for aphids, cucumber beetles, and powdery mildew. Spray (1.0 L/Ha) insecticide/fungicide as needed, stopping applications well before harvest.', inputKgPerHa: 1.0, inputType: 'Insecticide/Fungicide' },
            { week: 12, activity: 'Harvesting', detail: 'Test maturity by thumping the fruit (a dull thud is desirable) or checking the tendril nearest the fruit stem (it should be dried/withered).', inputKgPerHa: 0, inputType: 'None' }
        ]
    },
    
    // --- HERBS & OTHER CROPS ---

    'Coriander': {
        name: 'Coriander (Dhania)',
        type: 'Herb',
        durationWeeks: 6,
        baseFertilizerKgPerHa: 100,
        baseFertilizerType: 'NPK 17:17:17 (Basal)',
        topDressFertilizerKgPerHa: 50,
        topDressFertilizerType: 'CAN (Top Dressing)',
        pestSprayLitresPerHa: 0.5, 
        image: 'https://cdn.pixabay.com/photo/2017/06/21/17/48/coriander-2427969_1280.jpg',
        commonPests: [
            { name: 'Aphids', solution: 'Use neem oil or mild, approved insecticide (0.5 L/Ha). Do not spray close to harvest.' },
            { name: 'Damping Off', solution: 'Ensure well-drained soil and avoid overwatering, especially immediately after sowing.' }
        ],
        guide: [
            { week: 0, activity: 'Sowing & Basal Fertilizer', detail: 'Sow seeds thinly 1-2cm deep in rows 20-25cm apart. Apply NPK (100 Kg/Ha) basally before sowing. Needs consistent moisture for quick germination.', inputKgPerHa: 100, inputType: 'NPK 17:17:17' },
            { week: 3, activity: 'Top Dressing & Watering', detail: `Apply CAN (50 Kg/Ha) for leaf production. Water lightly but frequently to keep the soil consistently moist.`, inputKgPerHa: 50, inputType: 'CAN' },
            { week: 6, activity: 'Harvesting', detail: 'Begin harvesting outer leaves as needed, usually 30-40 days after sowing. Avoid cutting the central growing point to prolong production.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },
    
    'Beetroots': {
        name: 'Beetroots',
        type: 'Vegetable',
        durationWeeks: 11,
        baseFertilizerKgPerHa: 150, 
        baseFertilizerType: 'TSP + CAN (Split)',
        topDressFertilizerKgPerHa: 50, 
        topDressFertilizerType: 'CAN (Top Dressing)',
        pestSprayLitresPerHa: 0.0, 
        image: 'https://cdn.pixabay.com/photo/2016/11/23/00/32/beet-1851423_1280.jpg',
        commonPests: [
            { name: 'Leaf Miners', solution: 'Squash the larvae inside the leaf or remove and destroy infected leaves.' },
            { name: 'Cercospora Leaf Spot', solution: 'Practice crop rotation and apply copper-based fungicide if severe.' }
        ],
        guide: [
            { week: 0, activity: 'Sowing & Basal Fertilizer', detail: 'Sow seeds 1.25cm deep. Apply TSP (100-120 Kg/Ha) basally before sowing, along with the first half of CAN (50 Kg/Ha). Beetroots require high levels of Potassium and Boron.', inputKgPerHa: 100, inputType: 'TSP' },
            { week: 4, activity: 'Thinning & Top Dressing', detail: `Thin seedlings to 10-12cm apart in the row. Top dress with the second half of CAN (50 Kg/Ha). Consistent watering prevents fibrous roots.`, inputKgPerHa: 50, inputType: 'CAN' },
            { week: 11, activity: 'Harvesting', detail: 'Harvest when roots are 5-8cm in diameter. Delaying harvest results in large, woody, poor-quality roots.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },
    
    'Spinach': {
        name: 'Spinach',
        type: 'Vegetable',
        durationWeeks: 9,
        baseFertilizerKgPerHa: 200, 
        baseFertilizerType: 'DAP or Manure/Compost',
        topDressFertilizerKgPerHa: 150, 
        topDressFertilizerType: 'CAN',
        pestSprayLitresPerHa: 0.5,
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Leaf Miners', solution: 'Remove affected leaves early.' }
        ],
        guide: [
            { week: 0, activity: 'Planting & Basal Feed', detail: 'Plant 45cm x 45cm spacing. Use manure or DAP (200 Kg/Ha) at planting.', inputKgPerHa: 200, inputType: 'DAP' },
            { week: 4, activity: 'Top Dressing', detail: `Top-dress with CAN (150 Kg/Ha) to promote rapid leaf growth.`, inputKgPerHa: 150, inputType: 'CAN' },
            { week: 9, activity: 'Harvesting', detail: 'Harvest outer leaves after 60 days. Top-dress with foliar fertilizer after each harvest for continuous yield.', inputKgPerHa: 0, inputType: 'None' }
        ]
    },
    
    'Oranges': {
        name: 'Oranges (Mchungwa)',
        type: 'Fruit Tree',
        durationWeeks: 52,
        baseFertilizerKgPerHa: 150,
        baseFertilizerType: 'NPK 12:12:17 (Split Annual)',
        topDressFertilizerKgPerHa: 100, 
        topDressFertilizerType: 'CAN/Urea (Nitrogen Supplement)',
        pestSprayLitresPerHa: 2.0,
        image: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Citrus Greening Disease (HLB)', solution: 'Remove infected trees. Control the African Citrus Psyllid vector with systemic insecticides.' }
        ],
        guide: [
            { week: 0, activity: 'Planting (Seedlings)', detail: 'Plant grafted seedlings in deep holes. Fertilize 6 weeks after planting (0.7 Kg Nitrogen per tree, increasing annually).', inputKgPerHa: 0, inputType: 'Seedlings' },
            { week: 12, activity: 'Spring Fertilization (Pre-Bloom)', detail: `Apply 2/3 of the annual NPK (100 Kg/Ha) and 1/2 of the Nitrogen supplement (50 Kg/Ha). This supports flowering and fruit set.`, inputKgPerHa: 150, inputType: 'NPK/CAN' },
            { week: 24, activity: 'Fruit Growing Stage', detail: `Apply the remaining N and K (50 Kg/Ha CAN/Urea). Maintain weed-free environment under the canopy.`, inputKgPerHa: 50, inputType: 'CAN/Urea' },
            { week: 52, activity: 'Harvesting', detail: 'Harvest when fruit reaches desired colour and sugar content (Brix).', inputKgPerHa: 0, inputType: 'None' }
        ]
    },
    
    'Apples': {
        name: 'Apples (Tofaa)',
        type: 'Fruit Tree',
        durationWeeks: 52,
        baseFertilizerKgPerHa: 150,
        baseFertilizerType: 'Nitrogen (Annual Split)',
        topDressFertilizerKgPerHa: 0, 
        topDressFertilizerType: 'N/A',
        pestSprayLitresPerHa: 2.0,
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        commonPests: [
            { name: 'Codling Moth', solution: 'Use pheromone traps for monitoring and targeted insecticide application during fruit development.' }
        ],
        guide: [
            { week: 0, activity: 'Planting (Seedlings)', detail: 'Plant dormant seedlings. Ensure adequate Phosphorus and Potassium are incorporated into the soil before planting.', inputKgPerHa: 0, inputType: 'Seedlings' },
            { week: 16, activity: 'Spring Nitrogen Application', detail: `Apply 1/2 of the annual Nitrogen (75 Kg/Ha) after bloom to support shoot growth and leaf development.`, inputKgPerHa: 75, inputType: 'Nitrogen Fertilizer' },
            { week: 36, activity: 'Post-Harvest Nitrogen Application', detail: `Apply the remaining 1/2 of the annual Nitrogen (75 Kg/Ha) after harvest but before leaf drop.`, inputKgPerHa: 75, inputType: 'Nitrogen Fertilizer' },
            { week: 40, activity: 'Pruning (Dormancy)', detail: 'Prune during the dormant season (dry season) to remove dead wood, shape the tree, and ensure good light penetration for fruit colour.', inputKgPerHa: 0, inputType: 'None' }
        ]
    }

};


