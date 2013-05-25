/* If the database is empty, we initiate and 
 * add some default glyphs 
 * Ideally, we would connect to the Github api
 * (or a local Git repo) and load in a UFOfont
 * 
 * In the current implementation, a MongoDB
 * database corresponds to a typeface:
 * with a glyph collection and a metadata
 * collection.
 * I’m not sure if it makes sense to keep that
 * when there’s multiple fonts */

Glyphs = new Meteor.Collection("glyphs");
Meta = new Meteor.Collection("meta");

Meteor.publish("glyphs", function () {
  return Glyphs.find();
});

Meteor.publish("meta", function () {
  return Meta.find();
});

Meteor.startup(function () {
    if (Meta.find().count() === 0) {
    // Even if we can imagine a font with no glyphs,
    // a font always has metadata.
    // So no metadata means the database hasn’t been
    // initiated yet.
        var glyphs = [
            {
                "unicode": -1,
                "name": "a",
                "width": null,
                "contours": [
                    {
                        "open": false,
                        "points": [
                            [ 314, 66, 314, 66, 314, 66 ],
                            [ 302, 250, 299, 283, 302, 250 ],
                            [ 277, 316, 129, 313, 224, 315 ],
                            [ 37, 238, 37, 238, 37, 238 ],
                            [ 37, 186, 37, 186, 37, 186 ],
                            [ 114, 175, 114, 175, 114, 175 ],
                            [ 113, 243, 140, 251, 113, 243 ],
                            [ 221, 279, 222, 223, 222, 223 ],
                            [ 225, 149, 145, 169, 225, 149 ],
                            [ 26, 132, 27, 41, 27, 72 ],
                            [ 43, -3, 154, 9, 107, -8 ],
                            [ 239, 41, 239, 41, 239, 41 ],
                            [ 240, -8, 340, -9, 288, -8 ],
                            [ 373, 44, 373, 44, 373, 44 ],
                            [ 364, 74, 364, 74, 364, 74 ]
                        ]
                    },
                    {
                        "open": false,
                        "points": [
                            [ 109, 95, 108, 67, 109, 81 ],
                            [ 121, 54, 121, 54, 121, 54 ],
                            [ 229, 77, 229, 77, 229, 77 ],
                            [ 227, 122, 190, 119, 227, 122 ]
                        ]
                    }
                ]
            },
            {
                "unicode": -1,
                "name": "bet",
                "width": null,
                "contours": [
                    {
                        "open": false,
                        "points": [
                            [ 293, 74, 293, 74, 293, 74 ],
                            [ 68, 71, 68, 71, 68, 71 ],
                            [ 51, -6, 51, -6, 51, -6 ],
                            [ 363, 1, 363, 1, 363, 1 ],
                            [ 384, 50, 384, 50, 384, 50 ],
                            [ 334, 85, 334, 85, 334, 85 ],
                            [ 335, 216, 334, 280, 335, 216 ],
                            [ 295, 319, 253, 319, 253, 319 ],
                            [ 119, 319, 119, 319, 119, 319 ],
                            [ 87, 371, 87, 371, 87, 371 ],
                            [ 60, 357, 60, 357, 60, 357 ],
                            [ 75, 240, 75, 240, 75, 240 ],
                            [ 225, 240, 245, 241, 225, 240 ],
                            [ 254, 232, 276, 182, 260, 219 ]
                        ]
                    }
                ]
            },
            {
                "unicode": 92,
                "name": "R",
                "width": null,
                "contours": [
                    {
                        "open": false,
                        "points": [
                            [ 121, 165, 121, 165, 121, 165 ],
                            [ 263, 165, 278, 165, 263, 165 ],
                            [ 284, 173, 284, 184, 284, 184 ],
                            [ 284, 265, 284, 282, 284, 265 ],
                            [ 278, 287, 256, 287, 256, 287 ],
                            [ 121, 287, 121, 287, 121, 287 ]
                        ]
                    },
                    {
                        "open": false,
                        "points": [
                            [ 358, 318, 358, 188, 358, 244 ],
                            [ 338, 162, 300, 153, 300, 153 ],
                            [ 300, 147, 338, 146, 300, 147 ],
                            [ 364, 119, 365, 36, 364, 65 ],
                            [ 364, 18, 362, 0, 362, 0 ],
                            [ 284, 0, 284, 0, 284, 0 ],
                            [ 284, 89, 284, 105, 284, 89 ],
                            [ 281, 112, 262, 112, 262, 112 ],
                            [ 121, 112, 121, 112, 121, 112 ],
                            [ 121, 0, 121, 0, 121, 0 ],
                            [ 46, 0, 46, 0, 46, 0 ],
                            [ 46, 339, 72, 348, 46, 339 ],
                            [ 124, 352, 171, 352, 171, 352 ],
                            [ 235, 352, 318, 352, 235, 352 ]
                        ]
                    }
                ]
            },
        ];
        for (var i = 0; i < glyphs.length; i++) {
            Glyphs.insert(glyphs[i]);
        }
        var meta = [
            { "name": "" },
            { "version": {
                "major": 0,
                "minor": 0
                }
            },
            { "family": "" },
            { "style": "" },
            { "width": 400 },
            { "ascent": 400 },
            { "descent": 100 },
            { "cap": 0 },
            { "xHeight": 0 },
            { "angle": 0 },
        ];
        for (var i = 0; i < meta.length; i++) {
            Meta.insert(meta[i]);
        }
    }
});

