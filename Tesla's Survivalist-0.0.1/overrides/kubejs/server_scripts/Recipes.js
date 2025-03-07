ServerEvents.recipes(event => {
    // Remove gregtech recipes
    event.remove({ mod: 'gtceu' })
    

    //Zinc Fix
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

    event.remove({ id: 'create:crafting/materials/zinc_block_from_compacting' })
    //Gregtech Ingridients

    //Rods
      function gtrods(input) {
        event.shaped(Item.of('gtceu:' + input + '_rod', 2), [
          'A',
          'A'
        ], {
          A: 'gtceu:' && 'minecraft:' + input + '_ingot'
        })
      }
    
    //Wires
    function gtcables(input) {
      event.recipes.create.cutting(Item.of('gtceu:' + input + '_single_wire', 2), 'gtceu:' + input + '_rod')
    }

    function gtcompressB(input) {
      event.shapeless(
        'gtceu:' + input + '_block', // arg 1: output
        [
          '9x gtceu:' + input + '_ingot',

        ]
      )
    }

    function gtdecompressB(input) {
      event.shapeless(
        Item.of('gtceu:' + input + '_ingot', 9), // arg 1: output
        [
          '9x gtceu:' + input + '_block',

        ]
      )
    }

    function gtcompressI(input) {
      event.shapeless(
        'gtceu:' + input + '_ingot', // arg 1: output
        [
          '9x gtceu:' + input + '_nugget',

        ]
      )
    }

    function gtdecompressI(input) {
      event.shapeless(
        Item.of('gtceu:' + input + '_nugget', 9), // arg 1: output
        [
          'gtceu:' + input + '_ingot',

        ]
      )
    }
      
      
      function gtproducts(input) {
        gtrods(input)
        gtcables(input)
        gtcompressB(input)
        gtcompressI(input)
        gtdecompressB(input)
        gtdecompressI(input)
      }
      function Vannilaproducts(input) {
        gtrods(input)
        gtcables(input)
      }
    
      //GT Materials
      gtproducts('steel')
      gtproducts('aluminium')

      //Vannila Materials
      Vannilaproducts('copper')
    
    
  })