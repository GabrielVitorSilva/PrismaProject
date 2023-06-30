-- CreateTable
CREATE TABLE "modules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "courses_modules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fk_id_course" TEXT NOT NULL,
    "fk_id_module" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "courses_modules_fk_id_course_fkey" FOREIGN KEY ("fk_id_course") REFERENCES "courses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "courses_modules_fk_id_module_fkey" FOREIGN KEY ("fk_id_module") REFERENCES "modules" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "modules_name_key" ON "modules"("name");
