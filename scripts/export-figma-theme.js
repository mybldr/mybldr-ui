const fs = require('fs');
const util = require('util')

const [primitives, components] = JSON.parse(fs.readFileSync('./figma-theme.json', 'utf-8'));

const PRIMITIVES = primitives['_Primitives']['modes']['Style'];
const COMPONENTS = components['1. Color Modes']['modes']['Light Mode'];
const COLOR_MAP = Object.entries(PRIMITIVES['Colors']).reduce((acc, [name, colorValues]) => {
    const formattedName = name.split(' ').map((n) => n.toLowerCase()).join('');
    acc[formattedName] = Object.entries(colorValues).reduce((acc, [shade, shadeValues]) => {
        acc[shade] = shadeValues['$value'];
        return acc;
    },{});
    return acc;
}, {});


const setValueAtPath = (acc, path, value) => {
    let traversal = acc;
    for (let i = 0; i < path.length; i++) {
        const token = path[i];
        if (i === path.length - 1) {
            traversal[token] = value;
        } else {
            traversal[token] ??= {};
            traversal = traversal[token];
        }
    }
}

const buildPaletteFromThemeEntry = (themeEntry) => Object.entries(themeEntry).reduce((acc, [key, value]) => {
    // Avoid things like (...)_hover or (...)_on-brand for now 
    if (key.includes('_')) {
        return acc;
    }

    const [_, color, shade] = value['$value'].match(/\{Colors\.(.*)\.(.*)\}/)
    setValueAtPath(
        acc,
        key.split('-').slice(1),
        `colors["${color.toLowerCase()}"]["${shade}"]`
    )

    return acc;
}, {});

// Because there is no good meta-programming, just generate text that can be copy-pasted into the TS file
const PALETTE_BOILERPLATE = {
    text: buildPaletteFromThemeEntry(COMPONENTS['Colors']['Text']),
    background: buildPaletteFromThemeEntry(COMPONENTS['Colors']['Background']),
    border: buildPaletteFromThemeEntry(COMPONENTS['Colors']['Border']),
    foreground: buildPaletteFromThemeEntry(COMPONENTS['Colors']['Foreground']),
};

fs.writeFileSync('./src/colors.json', JSON.stringify(COLOR_MAP, null, '\t'));

console.log(util.inspect(PALETTE_BOILERPLATE, { depth: null }));
