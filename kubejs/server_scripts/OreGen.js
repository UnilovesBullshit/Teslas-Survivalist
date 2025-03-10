// Remove Base GT ores
GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
})


//Overworld Ores


//Iron ore
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:iron_vein", vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(1)
        vein.discardChanceOnAirExposure(0) 

    
        vein.layer("stone") 
        vein.dimensions("minecraft:overworld") 
        vein.biomes("#minecraft:is_overworld") 
        vein.heightRangeTriangle(0, 40) 

        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Iron, 4) 
            .rareBlock(GTMaterials.Copper, 1) 
            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10) 
            .maxEdgeRoundoff(0.2) 
        )
    })
})

//Nickel-Zinc ore
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:nickel_vein", vein => {
        vein.weight(30)
        vein.clusterSize(40)
        vein.density(1)
        vein.discardChanceOnAirExposure(0) 

    
        vein.layer("stone") 
        vein.dimensions("minecraft:overworld") 
        vein.biomes("#minecraft:is_overworld") 
        vein.heightRangeTriangle(0, 60) 

        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Nickel, 4) 
            .rareBlock(GTMaterials.Zinc, 4) 
            .rareBlockChance(0.5)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10) 
            .maxEdgeRoundoff(0.2) 
        )
    })
})


//Coal ore
 GTCEuServerEvents.oreVeins(event => {
     event.add("kubejs:coal_vein", vein => {
        vein.weight(60)
        vein.clusterSize(20)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0) 

    
        vein.layer("stone") 
        vein.dimensions("minecraft:overworld") 
        vein.biomes("#minecraft:is_overworld") 
        vein.heightRangeTriangle(40, 120) 

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Coal).size(6, 6))
                .layer(l => l.weight(3).mat(GTMaterials.Coal).size(6, 6))
            )
        )
    })
})

//Diamond ore
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:diamond_vein", vein => {
        vein.weight(20)
        vein.clusterSize(20)
        vein.density(0.1)
        vein.discardChanceOnAirExposure(0) 

    
        vein.layer("deepslate") 
        vein.dimensions("minecraft:overworld") 
        vein.biomes("#minecraft:is_overworld") 
        vein.heightRangeTriangle(-60, -20) 

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Coal).size(2, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Diamond).size(1, 1))
            )
        )
    })
})

//Redstone ore
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:redstone_vein", vein => {
        vein.weight(20)
        vein.clusterSize(20)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(0) 

    
        vein.layer("deepslate") 
        vein.dimensions("minecraft:overworld") 
        vein.biomes("#minecraft:is_overworld") 
        vein.heightRangeTriangle(-40, 0) 

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Redstone).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Copper).size(1, 1))
            )
        )
    })
})

//Lapis ore
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:lapis_vein", vein => {
        vein.weight(20)
        vein.clusterSize(20)
        vein.density(1)
        vein.discardChanceOnAirExposure(0) 

    
        vein.layer("stone") 
        vein.dimensions("minecraft:overworld") 
        vein.biomes("#minecraft:is_overworld") 
        vein.heightRangeTriangle(0, 30) 

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Lapis).size(2, 2))
                .layer(l => l.weight(3).mat(GTMaterials.Lapis).size(2, 2))
            )
        )
    })
})


//Copper ore
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:copper_vein", vein => {
        vein.weight(40) 
        vein.clusterSize(40)
        vein.density(1) 
        vein.discardChanceOnAirExposure(0) 

        vein.layer("stone")
        vein.dimensions("minecraft:overworld") 
        vein.heightRangeTriangle(20, 80)

        
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Copper, 4)
            .rareBlock(GTMaterials.Zinc, 1)
            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10)
            .maxEdgeRoundoff(0.2)
        )
    })
})











// Nether ores

//Silver ore
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:silver_vein", vein => {
        vein.weight(50) 
        vein.clusterSize(40)
        vein.density(1) 
        vein.discardChanceOnAirExposure(0) 

        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether") 
        vein.biomes("minecraft:soul_sand_valley")
        vein.heightRangeTriangle(60, 120)

        
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Silver, 4)
            .rareBlock(GTMaterials.Gold, 1)
            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10)
            .maxEdgeRoundoff(0.2)
        )
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:sulfur_vein", vein => {
        vein.weight(50) 
        vein.clusterSize(40)
        vein.density(1) 
        vein.discardChanceOnAirExposure(0) 

        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether") 
        vein.biomes("minecraft:soul_sand_valley")
        vein.heightRangeTriangle(0, 40)

        
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Sulfur, 4)
            .rareBlock(GTMaterials.NetherQuartz, 1)
            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10)
            .maxEdgeRoundoff(0.2)
        )
    })
})