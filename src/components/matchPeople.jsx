const data = Array.from({ length: 100 }, (_, i) => ({
  name: `Person ${i + 1}`,
  gender: i < 50 ? 'Male' : 'Female', // 50 คนแรกเป็นชาย 50 คนหลังเป็นหญิง
  preferences: {
    dog: Math.floor(Math.random() * 10) > 5,
    cat: Math.floor(Math.random() * 5) + 1,
    chicken: Math.floor(Math.random() * 5) + 1,
    fish: Math.floor(Math.random() * 10) > 5,
    bird: Math.floor(Math.random() * 10) > 5,

    // // ลอง 100%
    // dog: true,
    // cat: 1,
    // chicken: 10,
    // fish: true,
    // bird: false,
  },
}));

// ฟังก์ชันคำนวณเปอร์เซ็นต์ความเข้ากัน
const calculateCompatibility = (person1, person2) => {
  let totalScore = 0;
  let matchCount = 0;

  for (const key in person1) {
    // ถ้า type เป็น boolean หรือ string เช่น yes no ok thankYou
    if (typeof person1[key] === 'boolean' || typeof person1[key] === 'string') {
      // ถ้าทั้งคู่คำตอบเหมือนกัน ให้ถือว่าเข้ากันเต็มที่ 100%
      if (person1[key] === person2[key]) {
        totalScore += 100;
      } else {
        totalScore += 0;
      }
    } else {
      // หาเปอร์เซ็นต์ของความใกล้เคียง 1-5 ว่าเข้าใกล้กันแค่ไหน
      const score =
        (Math.min(person1[key], person2[key]) /
          Math.max(person1[key], person2[key])) *
        100;
      totalScore += score;
    }
    matchCount++;
  }
  // คะแนนทั้งหมดมาหารจำนวนคำถามเพื่อหาเปอร์เซน
  return (totalScore / matchCount).toFixed(2);
};

// ฟังก์ชันจับคู่แต่ละคนกับทุกคนที่เข้ากันได้
export const MatchPeople = (people = data) => {
  const matches = [];

  people.forEach((person) => {
    const compatibilityList = [];

    people.forEach((otherPerson) => {
      if (person.gender !== otherPerson.gender) {
        // จับคู่เฉพาะชาย-หญิง
        const compatibility = calculateCompatibility(
          person.preferences,
          otherPerson.preferences
        );
        compatibilityList.push({
          name: otherPerson.name,
          gender: otherPerson.gender,
          compatibility,
        });
      }
    });

    // เรียงจากเปอร์เซ็นต์ความเข้ากันมากไปน้อย
    compatibilityList.sort((a, b) => b.compatibility - a.compatibility);

    matches.push({
      name: person.name,
      gender: person.gender,
      matches: compatibilityList,
    });
  });

  return matches;
};
