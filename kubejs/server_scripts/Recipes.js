ServerEvents.recipes(event => {
    // Removing/Modyfing recipes
    event.remove({ mod: 'gtceu' })
    event.remove({ mod: 'ironfurnaces' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_pump' })
    event.remove({ mod: 'create_new_age' })
    
    event.replaceInput(
      { id:'create:crafting/kinetics/mechanical_press' }, 
      'minecraft:iron_block',            
      'minecraft:anvil'      
    )
    
    event.replaceInput(
      { id:'create:crafting/kinetics/mechanical_drill' }, 
      'minecraft:iron_ingot',            
      'gtceu:steel_ingot'      
    )

    event.replaceInput(
      { id:'create:crafting/kinetics/mechanical_drill' }, 
      'create:andesite_alloy',            
      'gtceu:steel_plate'      
    )

    event.replaceInput(
      { id:'create:crafting/kinetics/mechanical_harvester' }, 
      'create:andesite_alloy',            
      'gtceu:steel_rod'      
    )

    event.replaceInput(
      { id:'create:crafting/kinetics/mechanical_saw' }, 
      'create:iron_sheet',            
      'gtceu:steel_plate'      
    )

    event.replaceInput(
      { id:'create:crafting/kinetics/mechanical_saw' }, 
      'minecraft:iron_ingot',            
      'create:andesite_alloy'      
    )


    event.replaceInput(
      { id:'create:crafting/kinetics/mechanical_crafter' }, 
      'create:electron_tube',            
      'create:cogwheel'      
    )

    event.replaceInput(
      { input: 'create:zinc_ingot' }, 
      'create:zinc_ingot',            
      'gtceu:zinc_ingot'        
    )
    event.replaceOutput(
      { output: 'create:zinc_ingot' }, 
      'create:zinc_ingot',            
      'gtceu:zinc_ningot'        
    )
    event.replaceOutput(
      { output: 'create:zinc_nugget' }, 
      'create:zinc_nugget',            
      'gtceu:zinc_nugget'        
    )
    event.replaceInput(
      { input: 'create:zinc_nugget' }, 
      'create:zinc_nugget',            
      'gtceu:zinc_nugget'        
    )

    event.replaceInput(
      { input: '#forge:ingots/brass' }, 
      '#forge:ingots/brass',            
      'create:brass_ingot'        
    )

    event.replaceInput(
      { input: '#forge:plates/brass' }, 
      '#forge:plates/brass',            
      'create:brass_sheet'        
    )

    event.replaceInput(
      { input: '#forge:plates/iron' }, 
      '#forge:plates/iron',            
      'create:iron_sheet'        
    )

    event.replaceInput(
      { input: '#forge:plates/copper' }, 
      '#forge:plates/copper',            
      'create:copper_sheet'        
    )

    event.replaceInput(
      { input: '#forge:plates/obsidian' }, 
      '#forge:plates/obsidian',            
      'create:sturdy_sheet'        
    )

    event.replaceInput(
      { input: '#forge:plates/gold' }, 
      '#forge:plates/gold',            
      'create:golden_sheet'        
    )


    event.replaceInput(
      { input: 'create:electron_tube' }, 
      'create:electron_tube',            
      'gtceu:vacuum_tube'        
    )

    event.replaceInput(
      { input: 'minecraft:dried_kelp'} && {type: 'minecraft:crafting'} && {not:{id: 'minecraft:dried_kelp_block'}}, 
      'minecraft:dried_kelp',            
      'gtceu:rubber_ingot'        
    )

    event.replaceInput(
      {id: 'farmersdelight:kelp_roll'}, 
      'gtceu:rubber_ingot',
      'minecraft:dried_kelp'            
    )

    event.remove({ id: 'create:crafting/materials/zinc_block_from_compacting' })
    event.remove({ id: 'create:compacting/blaze_cake' })
    event.remove({ output: 'minecraft:paper' })
    event.remove({ output: 'create:pulp' })
    event.remove({ output: 'create:cardboard' })
    
    
    
    //Rods
      function GTrods(input) {
        event.shaped(Item.of('gtceu:' + input + '_rod', 2), [
          'A',
          'A'
        ], {
          A: 'gtceu:' + input + '_ingot'
        })
      }
      function Vannilarods(input) {
        event.shaped(Item.of('gtceu:' + input + '_rod', 2), [
          'A',
          'A'
        ], {
          A: 'minecraft:' + input + '_ingot'
        })
      }
    
    
    



    function Wiremaking(input){
      event.recipes.create.cutting(Item.of('gtceu:' + input + '_single_wire', 2), 'gtceu:' + input + '_rod')
    }

    function Wire1compacting(input){
      event.shapeless(
        'gtceu:' + input + '_double_wire', 
        [
          '2x gtceu:' + input + '_single_wire',

        ]
      )
    }

    function Wire2compacting(input){
      event.shapeless(
        'gtceu:' + input + '_quadruple_wire', 
        [
          '2x gtceu:' + input + '_double_wire',

        ]
      )
    }

    function Wire1decompacting(input){
      event.shapeless(
        Item.of('gtceu:' + input + '_single_wire', 2), 
        [
          '1x gtceu:' + input + '_double_wire',

        ]
      )
    }

    function Wire2decompacting(input){
      event.shapeless(
        Item.of('gtceu:' + input + '_double_wire', 2), 
        [
          '1x gtceu:' + input + '_quadruple_wire',

        ]
      )
    }

    function GTplates(input) {
      event.recipes.create.pressing(Item.of('gtceu:' + input + '_plate').withChance(0.5), 'gtceu:' + input + '_ingot')
    }

    //Compression and Decompression of materials
    function GTcompressB(input) {
      event.shapeless(
        'gtceu:' + input + '_block', 
        [
          '9x gtceu:' + input + '_ingot',

        ]
      )
    }

    function GTdecompressB(input) {
      event.shapeless(
        Item.of('gtceu:' + input + '_ingot', 9), 
        [
          'gtceu:' + input + '_block',

        ]
      )
    }

    function GTcompressI(input) {
      event.shapeless(
        'gtceu:' + input + '_ingot', 
        [
          '9x gtceu:' + input + '_nugget',

        ]
      )
    }

    function GTdecompressI(input) {
      event.shapeless(
        Item.of('gtceu:' + input + '_nugget', 9), 
        [
          'gtceu:' + input + '_ingot',

        ]
      )
    }
      
      function GTcables(input) {
        Wiremaking(input)
        Wire1compacting(input)
        Wire2compacting(input)
        Wire1decompacting(input)
        Wire2decompacting(input)
        InsulatingWires(input)
    }
    
  function Dustproducts(input, output){
    event.recipes.create.crushing(output, input)
  }


      //GT plates and compression gen
      function GTproducts(input) {
        GTplates(input)
        GTcompressB(input)
        GTcompressI(input)
        GTdecompressB(input)
        GTdecompressI(input)
      }
      
      //Compression gen
      function Compression(input) {
        GTcompressB(input)
        GTcompressI(input)
        GTdecompressB(input)
        GTdecompressI(input)
      }

      function InsulatingWires(input){
        event.recipes.create.deploying('gtceu:' + input + '_single_cable', ['gtceu:' + input + '_single_wire', 'gtceu:rubber_ingot'])
      }


    
      //GT Materials
      GTproducts('red_alloy')
      GTproducts('steel')
      GTproducts('aluminium')
      GTproducts('stainless_steel')

      //GT Dusts
      Dustproducts('#minecraft:logs', [Item.of('gtceu:wood_dust', 1), Item.of('gtceu:wood_dust', 1).withChance(0.5)])
      Dustproducts('gtceu:raw_redstone', [Item.of('minecraft:redstone', 2), Item.of('minecraft:redstone', 2).withChance(0.5)])
      Dustproducts('minecraft:coal', [Item.of('gtceu:coal_dust', 1), Item.of('gtceu:coal_dust', 2).withChance(0.25)])
      Dustproducts('gtceu:raw_sulfur', [Item.of('gtceu:sulfur_dust', 1), Item.of('gtceu:sulfur_dust', 1).withChance(0.25)])
      //Compression materials
      Compression('zinc')

      //Rod Materials
      Vannilarods('iron')
      Vannilarods('copper')
      Vannilarods('gold')
      GTrods('red_alloy')
      GTrods('steel')

      //Cable products
      GTcables('copper')
      GTcables('iron')
      GTcables('red_alloy')
      GTcables('steel')
      GTcables('gold')

      //nickel wires cause rods dont exist godamnit
      event.recipes.create.cutting(Item.of('gtceu:nickel_single_wire', 2), 'gtceu:nickel_ingot')
      Wire1compacting('nickel')
      Wire2compacting('nickel')
      Wire1decompacting('nickel')
      Wire2decompacting('nickel')
      InsulatingWires('nickel')

    
      //Mechanical Pump
      event.shaped(Item.of('create:mechanical_pump', 1), [
        'A ',
        'BC',
        'A '
      ], {
        A: 'gtceu:rubber_ingot',
        B: 'create:fluid_pipe',
        C: 'create:cogwheel'
      })

      //Vacuum Tube
      event.shaped(Item.of('gtceu:vacuum_tube', 1), [
        'A A',
        'ABA',
        'CBC'
      ], {
        A: 'gtceu:steel_rod',
        B: 'minecraft:glass',
        C: 'gtceu:red_alloy_single_wire'
      })

      //LV Circut
      event.shaped(Item.of('gtceu:basic_electronic_circuit', 1), [
        'ABA',
        'CCC',
        'BBB'
      ], {
        A: 'gtceu:vacuum_tube',
        B: 'gtceu:wood_plate',
        C: 'gtceu:red_alloy_single_cable'
      })

      //LV Machine Casing
      event.shaped(Item.of('gtceu:lv_machine_casing', 1), [
        'AAA',
        'B B',
        'AAA'
      ], {
        A: 'gtceu:steel_plate',
        B: 'minecraft:iron_block'
      })

      //LV Machine Hull
      event.shaped(Item.of('gtceu:lv_machine_hull', 1), [
        ' A ',
        'BCB'
      ], {
        A: 'gtceu:basic_electronic_circuit',
        B: 'gtceu:nickel_single_cable',
        C: 'gtceu:lv_machine_casing'
      })

      //Generator Coils
      event.shaped(Item.of('create_new_age:generator_coil', 1), [
        'BAB',
        'ACA',
        'BAB'
      ], {
        A: 'gtceu:rubber_ingot',
        B: 'gtceu:copper_quadruple_wire',
        C: 'gtceu:lv_machine_casing'
      })

      //Soft Mallet
      event.shaped(Item.of('gtceu:rubber_mallet', 1), [
        ' A ',
        ' BA',
        'B  '
      ], {
        A: 'gtceu:rubber_ingot',
        B: 'gtceu:steel_rod'
      })

      //Wire Cutter
      event.shaped(Item.of('gtceu:steel_wire_cutter', 1), [
        'A ',
        'BA'
      ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:steel_rod'
      })

      //LV Prospector
      event.shaped(Item.of('gtceu:prospector.lv', 1), [
        'ABA',
        'BDB',
        'CBC'
      ], {
        A: 'create:transmitter',
        B: 'gtceu:steel_plate',
        C: 'gtceu:basic_electronic_circuit',
        D: 'create:display_board'
      })
      //LV 1A Energy Converter
      event.shaped(Item.of('gtceu:lv_1a_energy_converter', 1), [
        'ABA',
        'BCB',
        'ABA'
      ], {
        A: 'gtceu:rubber_ingot',
        B: 'gtceu:nickel_quadruple_wire',
        C: 'gtceu:lv_machine_hull',
      })


      //Paper Making
      event.recipes.create.compacting('minecraft:paper', [Item.of('gtceu:wood_dust', 1), Fluid.water(250)])

      //Cardboard Making
      event.recipes.create.compacting('create:cardboard', [Item.of('minecraft:paper', 3)])

      //Blaze cake base
      event.recipes.create.compacting('create:blaze_cake_base', [Item.of('gtceu:sulfur_dust', 1), Item.of('minecraft:blaze_powder', 3)]).heated()

      //Steel Making
      event.recipes.create.mixing('gtceu:steel_ingot', [Item.of('minecraft:iron_ingot', 2), Item.of('minecraft:coal', 3), Fluid.lava(100)]).superheated()

      //Red Alloy Making
      event.recipes.create.mixing('gtceu:red_alloy_ingot', [Item.of('minecraft:copper_ingot', 1), Item.of('minecraft:redstone', 4)]).heated()

      //Rubber Making
      event.recipes.create.mixing('gtceu:rubber_ingot', [Item.of('gtceu:wood_dust', 4), Item.of('gtceu:sulfur_dust', 1)]).heated()

      //LV Magnet Making
      event.recipes.create.deploying('create_new_age:redstone_magnet', ['minecraft:redstone_block', 'gtceu:steel_ingot'])
  })