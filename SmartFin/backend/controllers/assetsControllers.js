let assets = [];

exports.getAssets = (req,res)=>{
    res.json(assets);
};

exports.addAsset = (req,res)=>{

    const asset = req.body;

    assets.push(asset);

    res.json({
        message:"Asset added",
        data:asset
    });

};