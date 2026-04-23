
export const createStudent = async (req, res) => {
  const { name, email } = req.body;
  try {
    const count = await Student.countDocuments();

    //const studentIdGen = `STD-${String(count + 1).padStart(4, "0")}`;

    const newStudent = await Student.create({
      name,
      email,
     // studentId: studentIdGen,
    });

    res.status(201).json({
      ok: true,
      message: "Student succesfully created",
      data: newStudent,
    });
  } catch (err) {
    res
      .status(500)
      .json({ ok: false, error: { message: "cannot create student" } });

    console.log(err.message);
  }
};