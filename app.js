let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 50,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'drill',
        price: 500,
        quantity: 0,
        multiplier: 5
    },
    {
        name: 'excavator',
        price: 1000,
        quantity: 0,
        multiplier: 10
    }

];

let automaticUpgrades = [
    {
        name: 'rover',
        price: 600,
        quantity: 0,
        multiplier: 20
    }
];

let autoUpgradeProgressBar = document.getElementById('autoUpgradeProgressBar');
let gold = 0
let clickMultiplier = 1;
let upgrade1 = clickUpgrades[0]
let upgrade2 = clickUpgrades[1]
let rover = automaticUpgrades[0];
let excavator = clickUpgrades[2]
let pickaxeButton = document.getElementById('buyPickaxe');
let roverButton = document.getElementById('buyRover');
let roverCountElem = document.getElementById('roverCount');
let roverPriceElem = document.getElementById('roverPrice');
let goldElem = document.getElementById('goldCount')
let autoUpgradeElem = document.getElementById('autoUpgradesPerClick')

function mineGold() {
    let totalResources = clickMultiplier + (upgrade1.quantity * upgrade1.multiplier) + (upgrade2.quantity * upgrade2.multiplier) + (excavator.quantity * excavator.multiplier);
    gold += totalResources
    updateGoldCount();
    updateTotalResourcesPerClick();
    console.log(gold);
}


function updatePickaxePrice() {
    let pickaxe = clickUpgrades[0];
    let pickaxePrice = document.getElementById('pickaxePrice')
    pickaxePrice.textContent = pickaxe.price
}

function updateDrillPrice() {
    let drill = clickUpgrades[1];
    let drillPrice = document.getElementById('drillPrice')
    drillPrice.textContent = drill.price
}
function updateExcavatorPrice() {
    let excavator = clickUpgrades[2];
    let excavatorPrice = document.getElementById('excavatorPrice')
    excavatorPrice.textContent = excavator.price
}


function updateGoldCount() {
    let goldElem = document.getElementById('goldCount');
    goldElem.textContent = gold;
}

function buyRover() {

    if (gold >= rover.price) {
        gold -= rover.price;
        rover.quantity++;
        rover.price *= 2;
        updateGoldCount();
        updateRoverCount();
        updateRoverPrice();
        updateTotalResourcesPerClick();
    }
}
function automateMining() {
    gold += rover.quantity * rover.multiplier;
    updateGoldCount();
}


function updateRoverCount() {
    roverCountElem.textContent = rover.quantity;
}

function updateRoverPrice() {
    roverPriceElem.textContent = rover.price;
}




function buyDrill() {
    const drill = clickUpgrades[1];

    if (gold >= drill.price) {
        gold -= drill.price;
        drill.quantity++;
        drill.price *= 2;
        updateGoldCount();
        updateClickMultiplierDrill();
        updateDrillPrice();
        updateTotalResourcesPerClick()
    }
}

function buyExcavator() {
    const excavator = clickUpgrades[2];

    if (gold >= excavator.price) {
        gold -= excavator.price;
        excavator.quantity++;
        excavator.price *= 2;
        updateGoldCount();
        updateClickMultiplierExcavator();
        updateExcavatorPrice();
        updateTotalResourcesPerClick();
    }
}




function buyPickaxe() {
    const pickaxe = clickUpgrades[0];

    if (gold >= pickaxe.price) {
        gold -= pickaxe.price;
        pickaxe.quantity++;
        pickaxe.price *= 2;
        updateGoldCount();
        updateClickMultiplier();
        updatePickaxePrice()
        updateTotalResourcesPerClick()
    }
}

function updateClickMultiplier() {
    let pickaxe = clickUpgrades[0];
    clickMultiplier = pickaxe.quantity;
    let clickMultiplierElem = document.getElementById('clickMultiplier');
    clickMultiplierElem.textContent = clickMultiplier;
}
function updateClickMultiplierDrill() {
    let drill = clickUpgrades[1];
    clickMultiplier = drill.quantity;
    let clickMultiplierElem = document.getElementById('clickMultiplierDrill');
    clickMultiplierElem.textContent = clickMultiplier;
}

function updateClickMultiplierExcavator() {
    let excavator = clickUpgrades[2];
    clickMultiplier = excavator.quantity;
    let clickMultiplierElem = document.getElementById('clickMultiplierExcavator');
    clickMultiplierElem.textContent = clickMultiplier;
}

function updateTotalResourcesPerClick() {
    let totalResources = clickMultiplier + (upgrade1.quantity * upgrade1.multiplier) + (upgrade2.quantity * upgrade2.multiplier) + (excavator.quantity * excavator.multiplier);
    let totalResourcesElem = document.getElementById('totalResourcesPerClick');
    totalResourcesElem.textContent = totalResources;
}



function autoUpgradesPerClick() {
    let totalResources = (rover.quantity * rover.multiplier);
    autoUpgradeElem.textContent = totalResources;
    let timeRemaining = 5000 - (Date.now() % 5000);
    let progressValue = (timeRemaining / 5000) * 100;
    autoUpgradeProgressBar.value = progressValue;
    if (rover.quantity > 0) {
        autoUpgradeProgressBar.style.display = "block";
    } else {
        autoUpgradeProgressBar.style.display = "none";
    }
}

function applyGoldBonus() {
    let bonusPercentage = 0.10;
    let bonusAmount = Math.floor(gold * bonusPercentage);
    gold += bonusAmount;

    updateGoldCount();


    let bonusImage = document.getElementById('bonusImage');
    let bonusText = document.getElementById('bonusText');
    let bonusAmountSpan = document.getElementById('bonusAmount');
    bonusAmountSpan.textContent = bonusAmount;
    bonusImage.style.display = 'block';
    bonusText.style.display = 'block';


    setTimeout(() => {
        bonusImage.style.display = 'none';
        bonusText.style.display = 'none';
    }, 5000);
}

setInterval(applyGoldBonus, 51000);


function applyGoldPenalty() {
    let penaltyPercentage = 0.15;
    let penaltyAmount = Math.floor(gold * penaltyPercentage);
    gold -= penaltyAmount;

    updateGoldCount();


    let penaltyImage = document.getElementById('penaltyImage');
    let penaltyText = document.getElementById('penaltyText');
    let penaltyAmountSpan = document.getElementById('penaltyAmount');
    penaltyAmountSpan.textContent = penaltyAmount;
    penaltyImage.style.display = 'block';
    penaltyText.style.display = 'block';


    setTimeout(() => {
        penaltyImage.style.display = 'none';
        penaltyText.style.display = 'none';
    }, 4000);
}

setInterval(applyGoldPenalty, 33000);



setInterval(autoUpgradesPerClick, 1000);







setInterval(automateMining, 5000)

updateGoldCount()
mineGold()