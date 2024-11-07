const requireImages = require.context('../assets', false, /\.(jpg|jpeg|png|gif)$/);

export const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 10.99,
      image:requireImages("./gats_by.png"),
      description: "A novel about the American dream set in the 1920s. It explores themes of wealth, class, and the disillusionment of the American elite. Gatsby’s obsession with Daisy represents the dangers of idealizing the past. The novel critiques the moral decay of society. The characters are ultimately trapped in their own desires. This timeless story reveals the complexities of human nature."
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 12.99,
      image: requireImages("./mocking_bird.png"),
      description: "A gripping story of race and justice in the American South. Scout Finch narrates her childhood in Maycomb, Alabama, during the 1930s. Her father, lawyer Atticus Finch, defends a black man accused of raping a white woman. The novel explores racism, moral growth, and the loss of innocence. Scout’s perspective on these events shapes the story. This powerful book offers an important reflection on justice and morality."
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 15.99,
      image: requireImages("./gats_by.png") ,
      description: "A dystopian novel set in a totalitarian society. In Oceania, the government, led by Big Brother, monitors everything. The protagonist, Winston Smith, seeks truth and freedom in a world of lies. The novel critiques totalitarian regimes and the loss of personal autonomy. Orwell’s work is a chilling exploration of censorship and propaganda. It remains a timeless warning against oppressive governments."
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 9.99,
      image: requireImages("./pride_and_prejudice.png"),
      description: "A classic romance novel that explores issues of social class and marriage. Elizabeth Bennet, the witty and independent heroine, navigates love and family expectations. Her relationship with the proud Mr. Darcy evolves throughout the novel. Themes of pride, prejudice, and societal norms shape the characters' interactions. Austen’s sharp critique of social structures resonates across centuries. The novel remains a beloved exploration of love and self-awareness."
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: 14.99,
      image: requireImages("./catcher.png"),
      description: "A story of adolescent rebellion and disillusionment. Holden Caulfield, the protagonist, narrates his experiences after being expelled from school. The novel delves into themes of alienation, identity, and the loss of innocence. Holden struggles with finding a place in a world he feels disconnected from. His journey reflects a desire for authenticity in a phony world. The novel captures the confusion and angst of adolescence."
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 11.99,
      image: requireImages("./hobbit.png"),
      description: "A fantasy adventure novel following the journey of Bilbo Baggins. Bilbo, a hobbit, is reluctantly swept into an epic quest to reclaim a stolen treasure. Along the way, he encounters trolls, elves, and dragons. His journey is one of personal growth and courage. Tolkien’s world-building and rich language immerse readers in Middle-earth. This timeless story of adventure has captivated readers for generations."
    },
    {
      id: 7,
      title: "Moby-Dick",
      author: "Herman Melville",
      price: 13.49,
      image: requireImages("./gats_by.png"),
      description: "A seafaring tale about Captain Ahab's obsessive quest to kill the white whale. Ishmael, the novel’s narrator, joins the whaling ship Pequod. Ahab’s monomaniacal pursuit of Moby-Dick leads to tragedy. The novel explores themes of fate, revenge, and the limits of human understanding. Melville’s work is both a thrilling adventure and a philosophical meditation. It remains one of the greatest American novels."
    },
    {
      id: 8,
      title: "The Odyssey",
      author: "Homer",
      price: 7.99,
      image:requireImages("./odessy.png"),
      description: "An epic poem that tells the adventures of Odysseus on his journey home. After fighting in the Trojan War, Odysseus struggles to return to Ithaca. Along the way, he encounters mythical creatures, gods, and temptations. The story explores the themes of perseverance, loyalty, and homecoming. Odysseus’ journey represents the human struggle against adversity. This foundational work of Western literature continues to inspire readers worldwide."
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      price: 13.99,
      image: requireImages("./hobbit.png"),
      description: "A dystopian novel that critiques the loss of individuality in a technologically advanced society. In Huxley’s future, people are genetically engineered for specific roles. The novel explores the consequences of a society obsessed with pleasure and conformity. Characters like Bernard Marx and John the Savage challenge this controlled world. Huxley critiques the dangers of losing individuality in the pursuit of stability. His novel offers a powerful warning about the future of humanity."
    },
    {
      id: 10,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      price: 16.99,
      image:  requireImages("./catcher.png"),
      description: "A psychological drama about guilt, morality, and redemption. The novel follows Rodion Raskolnikov, a young man who commits a crime and justifies it. As he grapples with his conscience, he faces the weight of his actions. Dostoevsky explores themes of sin, suffering, and salvation. The book delves deeply into the psychology of guilt and isolation. It remains a profound work in understanding the complexities of human morality."
    },
    {
      id: 11,
      title: "War and Peace",
      author: "Leo Tolstoy",
      price: 18.99,
      image:requireImages("./mocking_bird.png"),
      description: "A historical novel that intertwines the lives of several families during the Napoleonic wars. Tolstoy explores the effects of war on society and individuals. The characters’ personal struggles reflect the broader themes of fate and free will. The novel blends historical events with fictional storytelling. Themes of love, honor, and personal transformation resonate throughout. Tolstoy’s masterpiece is a sweeping exploration of Russian society and history."
    },
    {
      id: 12,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      price: 11.49,
      image: requireImages("./odessy.png"),
      description: "A gothic novel about a man whose portrait ages while he remains young. Dorian Gray’s pursuit of hedonism leads him to moral corruption. As his actions become increasingly vile, his portrait bears the consequences. Wilde critiques the pursuit of beauty and pleasure at any cost. The novel examines the consequences of vanity and living without conscience. It’s a chilling exploration of the human soul’s darker side."
    },
    {
      id: 13,
      title: "Frankenstein",
      author: "Mary Shelley",
      price: 10.49,
      image: requireImages("./mocking_bird.png"),
      description: "The story of a scientist who creates a monster that ultimately destroys him. Victor Frankenstein’s obsession with creating life leads to tragedy. The novel raises questions about the responsibilities of creation and scientific ambition. Shelley's work explores themes of isolation, revenge, and humanity. The monster’s quest for acceptance highlights societal rejection. This gothic novel remains a powerful commentary on the dangers of unchecked ambition."
    },
    {
      id: 14,
      title: "Dracula",
      author: "Bram Stoker",
      price: 14.49,
      image:  requireImages("./hobbit.png"),
      description: "A horror novel that introduced the character of Count Dracula. The story follows Jonathan Harker’s journey to Transylvania, where he encounters Dracula. The novel explores themes of superstition, sexuality, and the clash of cultures. Dracula’s vampiric powers pose a threat to England’s moral order. Stoker’s narrative is a thrilling mix of gothic horror and Victorian anxieties. The character of Dracula remains a staple of horror fiction."
    },
    {
      id: 15,
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      price: 17.49,
      image:requireImages("./gats_by.png"),
      description: "A philosophical novel that delves into questions of faith, morality, and family. The story revolves around the three Karamazov brothers and their tumultuous relationship with their father. Themes of guilt, responsibility, and the existence of God dominate the narrative. Dostoevsky explores the complexity of human nature and divine justice. The novel presents a powerful exploration of the philosophical and spiritual crises. It’s a profound work on the nature of human existence."
    },
    {
      id: 16,
      title: "The Divine Comedy",
      author: "Dante Alighieri",
      price: 19.99,
      image:requireImages("./odessy.png"),
      description: "An epic poem about Dante’s journey through Hell, Purgatory, and Paradise. Guided by the Roman poet Virgil, Dante encounters various figures from history and mythology. The narrative explores themes of sin, redemption, and divine justice. The poem’s structure reflects Dante’s understanding of the Christian afterlife. It is a key work in Italian literature and offers deep insights into the medieval worldview. Alighieri’s work remains a cornerstone of Western literary tradition."
    }
  ];
  