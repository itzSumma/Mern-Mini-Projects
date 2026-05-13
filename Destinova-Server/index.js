
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { MongoClient, ServerApiVersion,ObjectId } = require("mongodb");
dotenv.config();

const uri =process.env.MONGODB_URI; 

const app = express();
const PORT = process.env.PORT;
// middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    
    await client.connect();
const db =client.db("destinova");
const destinationCollection =db.collection("destinations");
// Get all destinations
app.get("/destination",async(req,res)=>{
const result =await destinationCollection.find().toArray();
res.json(result);

})

// Get a single destination by ID
app.get("/destination/:id", async (req, res) => {
  try {
    const id = req.params.id;
    
    
    const query = { _id: new ObjectId(id) }; 
    const result = await destinationCollection.findOne(query);

    if (!result) {
      return res.status(404).send({ message: "Destination not found" });
    }

    res.send(result);
  } catch (error) {
    console.error("Single destination fetch error:", error);
    res.status(500).send({ message: "Invalid ID format or Server Error" });
  }
});

// Create a new destination
app.post("/destination", async (req, res) => {      
    try{
      const destinationData = req.body;
    console.log(destinationData);
  const result = await destinationCollection.insertOne(destinationData);
  res.status(201).send(result);
    } 
  catch(error){
    console.error("server error");
    res.status(500).send ({message:"Facing problem for saving data in database"});
  }
  });

// Update a single destination
app.patch("/destination/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const updatedData = req.body;

    
    const updateDoc = {
      $set: {
        destinationName: updatedData.destinationName,
        country: updatedData.country,
        category: updatedData.category,
        price: updatedData.price,
        duration: updatedData.duration,
        imageUrl: updatedData.imageUrl,
        description: updatedData.description,
      },
    };

    const result = await destinationCollection.updateOne(filter, updateDoc);

    if (result.matchedCount === 0) {
      return res.status(404).send({ message: "Destination not found" });
    }

    res.send(result);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).send({ message: "Server error during update" });
  }
});

// Delete a single destination

app.delete('/destination/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }; // 
    const result = await destinationCollection.deleteOne(query);

    if (result.deletedCount === 1) {
      res.status(200).send({ message: "Deleted successfully" });
    } else {
      res.status(404).send({ message: "Destination not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});