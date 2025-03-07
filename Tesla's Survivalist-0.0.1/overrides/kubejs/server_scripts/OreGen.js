// Remove Base GT ores
GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
})

//Iron ore
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:vanilla_iron_vein", vein => {
        // Basic vein generation properties
        vein.weight(50) // [*] (1)
        vein.clusterSize(40) // [*] (2)
        vein.density(0.25) // [*] (3)
        vein.discardChanceOnAirExposure(0) // (4)

        // Define where the vein can generate
        vein.layer("stone") // [*] (5)
        vein.dimensions("minecraft:overworld") // (6)
        vein.biomes("#minecraft:is_overworld") // (7)

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(0, 60) // (8)

        // Define the vein's generator:
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Iron, 4) // (1)
            .rareBlock(GTMaterials.Copper, 1) // (2)
            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10) // (3)
            .maxEdgeRoundoff(0.2) // (4)
        )
    })
})

//Copper ore
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:vanilla_copper_vein", vein => {
        // Basic vein generation properties
        vein.weight(50) // [*] (1)
        vein.clusterSize(40) // [*] (2)
        vein.density(0.25) // [*] (3)
        vein.discardChanceOnAirExposure(0) // (4)

        // Define where the vein can generate
        vein.layer("stone") // [*] (5)
        vein.dimensions("minecraft:overworld") // (6)
        vein.biomes("#minecraft:is_overworld") // (7)

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(20, 80) // (8)

        // Define the vein's generator:
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Copper, 4) // (1)
            .rareBlock(GTMaterials.Zinc, 1) // (2)
            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10) // (3)
            .maxEdgeRoundoff(0.2) // (4)
        )
    })
})
