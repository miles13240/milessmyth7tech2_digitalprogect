let player_sprite: Sprite = null
tiles.placeOnRandomTile(player_sprite, assets.tile`myTile4`)
tiles.setCurrentTilemap(tilemap`level2`)
player_sprite = sprites.create(assets.image`player`, SpriteKind.Player)
tiles.placeOnRandomTile(player_sprite, assets.tile`myTile4`)
controller.moveSprite(player_sprite)
scene.cameraFollowSprite(player_sprite)

